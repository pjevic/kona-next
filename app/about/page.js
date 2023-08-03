/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/Hero/Hero";
import Article from "@/components/Article/Article";

import data from "./data_SR.json";
import styles from "./page.module.scss";

const { text1, text2 } = data;

function About() {
  return (
    <div className={styles.about}>
      <Hero
        style={{ transform: "translateY(0rem)" }}
        teaser="stručnost koja deluje"
        line1="Vaša sigurna ruka"
        line2="za poslovne izazove"
        line3="i mogućnosti"
      />
      <section className={styles.about__section}>
        <Article content={text1} />

        <div className={styles.about__imgs}></div>
      </section>
    </div>
  );
}

export default About;
