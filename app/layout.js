import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Reinoush",
  description: "Nos Parfums Élégance, qualité, et passion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon declarations */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />

        {/* Script Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BNNCEHG6ZM"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BNNCEHG6ZM');
            `,
          }}
        />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
