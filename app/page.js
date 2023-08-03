/** @format */

"use client";

import { useState } from "react";

import Hero from "@/components/Hero/Hero";
import Advisor from "@/components/Advisor/Advisor";
import Cards from "@/components/Cards/Cards";
import Overview from "@/components/Overview/Overview";
import Partners from "@/components/Partners/Partners";
import GradientBox from "@/components/GradientBox/GradientBox";
import Form from "@/components/Form/Form";

import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Hero
        teaser="trideset godina"
        line1="Računovođa"
        line2="Carinski zastupnik"
        line3="Sve na jednom mestu"
      />
      <Advisor />

      <Cards />
      <Overview />

      <Partners />

      <GradientBox>
        <Form />
        <Image
          className={styles.form__img}
          src={"/assets/imgs/form/form.svg"}
          width={517}
          height={776}
          alt="Women looking at form, illustration"
        />
      </GradientBox>
    </main>
  );
}
