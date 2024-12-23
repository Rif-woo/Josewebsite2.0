import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";


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
      </Head>
      <body
        className={``}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
