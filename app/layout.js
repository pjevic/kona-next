/** @format */
import Script from "next/script";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KO-NA",
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
        src={"https://www.googletagmanager.com/gtag/js?id=G-Y1ZCWLZPXX"}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y1ZCWLZPXX');`}
      </Script>
    </html>
  );
}
