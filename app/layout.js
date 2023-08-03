/** @format */

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KO-NA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.style}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
