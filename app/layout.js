import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";
import React, { Suspense } from 'react';
import GoogleAnalytics from '@/components/google-analytics';
import { PostHogProvider } from './providers';

export const metadata = {
  title: "Reinoush",
  description: "Nos Parfums Élégance, qualité, et passion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={null}>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={
            (
              process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
              process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID
            )
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
      <body>
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
  )
}
