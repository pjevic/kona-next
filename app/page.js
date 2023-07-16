/** @format */

"use client";

import Image from "next/image";

import styles from "./page.module.scss";

import HelloSection from "@/components/HelloSection/HelloSection";
import Section from "@/components/Section/Section";
import Adviser from "@/components/Adviser/Adviser";
import Cards from "@/components/Cards/Cards";
import Overview from "@/components/Overview/Overview";
import Partners from "@/components/Partners/Partners";

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

      <Section>
        <Cards />
      </Section>

      <Section>
        <Overview />
      </Section>

      <Partners />
    </main>
  );
}
