import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

// Stockage temporaire des commandes en attente de confirmation
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let Devise = "FCFA";
if (!timeZone.includes("Africa")) {
  Devise = "€";
}

const ordersFilePath = path.join('./OrderData/orders.json');
console.log("Order Path: ",ordersFilePath, __dirname);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    // Générer un ID unique pour la commande
    const orderId = crypto.randomBytes(16).toString('hex');
    console.log('Generated orderId:', orderId);

    // Stocker temporairement les données de la commande dans un fichier
    try {
      const orderData = {
        orderId,
        clientData: data,
        timestamp: new Date(),
      };

      // Read existing orders
      let existingOrders = [];
      if (fs.existsSync(ordersFilePath)) {
        const fileData = fs.readFileSync(ordersFilePath);
        console.log("JSON PARSE: ", fileData.length);

        if (fileData.length == 0) {
          existingOrders = [];
        } else {

          existingOrders = JSON.parse(fileData);
        }
      }

      // Append new order
      existingOrders.push(orderData);
      fs.writeFileSync(ordersFilePath, JSON.stringify(existingOrders, null, 2));
      console.log('Order stored successfully in file:', orderData);
    } catch (error) {
      console.error('Error storing order in file:', error);
    }
    // Cissreinejosephine@gmail.com

    // Créer le lien de confirmation
    const confirmationLink = `${process.env.NEXT_PUBLIC_SITE_URL}/api/orderConfirmation?orderId=${orderId}`;

    const { emailData, error } = await resend.emails.send({
        from: 'Reinoush <send@reinoush.com>',
        to: 'nzalecherif@gmail.com',
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

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      emailData: emailData,
      message: "URL générée pour la confirmation de la commande"
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');
    if (!orderId) {
      return NextResponse.json({ success: false, message: "id commande non trouvée" }, { status: 404 });
    }

    // Read existing orders
    let existingOrders = [];
    if (fs.existsSync(ordersFilePath)) {
      const fileData = fs.readFileSync(ordersFilePath);
      existingOrders = JSON.parse(fileData);
    }

    const orderData = existingOrders.find(order => order.orderId === orderId);

    if (!orderData) {
      return NextResponse.json({ success: false, message: "Commande non trouvée" }, { status: 404 });
    }

    // Envoyer les données à Zapier
    const zapierResponse = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData.clientData),
    });

    if (!zapierResponse.ok) {
      throw new Error('Erreur lors de l\'envoi à Zapier');
    }

    // Supprimer la commande du stockage temporaire
    const updatedOrders = existingOrders.filter(order => order.orderId !== orderId);
    fs.writeFileSync(ordersFilePath, JSON.stringify(updatedOrders, null, 2));

    return NextResponse.redirect(new URL('/order-confirmation', request.url));
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
