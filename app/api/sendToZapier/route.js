// app/api/sendToZapier/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Envoi à Zapier
    const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/21477985/2fdxn3p/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await zapierResponse.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("Erreur Zapier :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Gestion CORS pour les préflight OPTIONS
export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}