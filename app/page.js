/** @format */

"use client";

import Image from "next/image";

import HelloSection from "@/components/HelloSection/HelloSection";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <HelloSection
        teaser="trideset godina"
        line1="Računovođa"
        line2="Carinski zastupnik"
        line3="Sve na jednom mestu"
      />
    </main>
  );
}
