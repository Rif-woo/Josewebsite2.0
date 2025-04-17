import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";
import React, { Suspense } from 'react';
import GoogleAnalytics from '@/components/google-analytics';
import { PostHogProvider } from './providers';
import geoip from 'geoip-lite';
import { headers } from 'next/headers';

export const metadata = {
  title: "Reinoush",
  description: "Nos Parfums Élégance, qualité, et passion.",
};

export default function RootLayout({ children }) {
  // Récupération des headers (IP) côté serveur
  // const hdrs = headers();
  // const ip = hdrs.get('x-forwarded-for')?.split(',')[0]
  //          ?? hdrs.get('x-real-ip')
  //          ?? '127.0.0.1';
  // // Lookup géolocalisation
  // const geo = geoip.lookup(ip) || {};
  // const showPrice = geo.continent === 'AF';
  // console.log(geo)

  return (
    <html lang="en">
      <Suspense fallback={null}>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={
            process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID 
            || process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID
          }
        />
      </Suspense>
      <Head>
        {/* Favicon declarations */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body data-show-price={showPrice ? '1' : '0'}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGZLPQ8C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <PostHogProvider>
          {children}
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
