/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Hero.module.scss";
import data from "./data.json";

import { Cousine, DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Hero({ teaser, line1, line2, line3 }) {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.hero__image}
        src={"/assets/imgs/waves/waves-hero-1728px.svg"}
        width={1728}
        height={1022}
        alt="background image, waves"
      />
      <div className={styles.hero__container}>
        <div className={styles["hero__container--sub"]}>
          <span style={cousine.style} className={styles.hero__teaser}>
            {teaser}
          </span>

          <h1 style={dmSerifDisplay.style} className={styles.hero__heading}>
            {line1}
            <br />
            {line2}
            <br />
            {line3}
            <br />
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
