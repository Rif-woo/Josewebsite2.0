import { NextResponse } from "next/server";
import { Resend } from "resend";
import connectDB from '../../../lib/mongodb';
import Order from '../../../models/Order';
import crypto from 'crypto';
import { EmailTemplate } from '@/components/email-template';

// Stockage temporaire des commandes en attente de confirmation
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let Devise = "FCFA";
if (!timeZone.includes("Africa")) {
  Devise = "€";
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    // Générer un ID unique pour la commande
    const orderId = crypto.randomBytes(16).toString('hex');
    console.log('Generated orderId:', orderId);

    // Connect to MongoDB
    await connectDB();

    // Create new order
    const orderData = {
      orderId,
      clientData: data,
      timestamp: new Date(),
    };

    try {
      const order = new Order(orderData);
      await order.save();
      console.log('Order stored successfully in database:', orderData);
    } catch (error) {
      console.error('Error storing order in database:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Créer le lien de confirmation
    const confirmationLink = `${process.env.NEXT_PUBLIC_SITE_URL}/api/orderConfirmation?orderId=${orderId}`;

    try {
      const emailData = await resend.emails.send({
        from: 'Reinoush <send@reinoush.com>',
        to: 'Cissreinejosephine@gmail.com',
        subject: "Nouvelle commande à confirmer!",
        react: EmailTemplate({
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          address: data.address,
          deliveryCountry: data.deliveryCountry,
          totalAmount: data.totalAmount,
          productQuantity: data.productQuantity,
          confirmationLink: confirmationLink,
          products: data.products,
          Devise: Devise
        }),
      });

      console.log("Email sent successfully:", emailData);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "id commande non trouvée" },
        { status: 404 }
      );
    }

    // Find order in database
    const orderData = await Order.findOne({ orderId });

    if (!orderData) {
      return NextResponse.json(
        { success: false, message: "Commande non trouvée" },
        { status: 404 }
      );
    }

    // Send data to Zapier
    const zapierResponse = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData.clientData),
    });

    if (!zapierResponse.ok) {
      throw new Error('Erreur lors de l\'envoi à Zapier');
    }

    // Delete the order from database
    await Order.deleteOne({ orderId });

    return NextResponse.redirect(new URL('/order-confirmation', request.url));
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
