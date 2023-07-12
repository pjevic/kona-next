/** @format */

"use client";

import Image from "next/image";

import styles from "./page.module.scss";
import HelloSection from "@/components/HelloSection/HelloSection";
import Section from "@/components/Section/Section";
import Adviser from "@/components/Adviser/Adviser";

import BtnCTA from "@/components/Buttons/BtnCTA/BtnCTA";
import Btn from "@/components/Buttons/Btn/Btn";

export default function Home() {
  return (
    <main>
      <HelloSection
        teaser="trideset godina"
        line1="Računovođa"
        line2="Carinski zastupnik"
        line3="Sve na jednom mestu"
      />

      <Section>
        <Adviser />
      </Section>
    </main>
  );
}
