import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
// Stockage temporaire des commandes en attente de confirmation
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let Devise = "FCFA";
if (!timeZone.includes("Africa")) {
  Devise = "€";
}
const pendingOrders = new Map();//la map
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    // Générer un ID unique pour la commande
    const orderId = crypto.randomBytes(16).toString('hex');

    // Stocker temporairement les données de la commande
    pendingOrders.set(orderId, {
      clientData: data,
      timestamp: new Date(),
    });

    // Créer le lien de confirmation
    const confirmationLink = `${process.env.NEXT_PUBLIC_SITE_URL}/api/orderConfirmation?orderId=${orderId}`;

    const { emailData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'azermax123zale@gmail.com',
        subject: "Nouvelle commande à confirmer!",
        react: EmailTemplate({
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          address: data.address,
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

    if (!orderId || !pendingOrders.has(orderId)) {
      return NextResponse.json({ success: false, message: "Commande non trouvée" }, { status: 404 });
    }

    const orderData = pendingOrders.get(orderId);

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
    pendingOrders.delete(orderId);

    return NextResponse.redirect(new URL('/order-confirmation', request.url));
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
