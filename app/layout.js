/** @format */

import Script from "next/script";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "KO-NA doo Kikinda | Računovodstvo. Knjigovodstvo. Carinsko zastupanje - špedicija",
  description:
    "Računovodstvo. Knjigovodstvo. Carinsko zastupanje - špedicija. Sve na jednom mestu. Kikinda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.style}>
        <Navigation />
        {children}
        <Footer />
      </body>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-767NNYNK96"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-767NNYNK96');
        `}
      </Script>
    </html>
  );
}
