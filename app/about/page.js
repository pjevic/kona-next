/** @format */

import React from "react";
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
        <div className={styles["about__article-box"]}>
          <Article content={text1} />
        </div>

        <div className={`${styles.about__imgs} ${styles["about__imgs--1"]}`}>
          <Image
            className={`${styles.about__img} ${styles["about__img--graph"]}`}
            src={"/assets/imgs/about/about-showing-graph.svg"}
            width={539}
            height={289}
            alt="Illustration of a man shoving a graph"
          />
          <Image
            className={`${styles.about__img} ${styles["about__img--certificate"]}`}
            src={"/assets/imgs/about/about-showing-certificate.svg"}
            width={331.5}
            height={399}
            alt="Illustration of a man shoving a certificate"
          />
        </div>
      </section>

      <div className={styles["about__blog-container"]}></div>

      <section
        className={`${styles.about__section} ${styles["about__section--2"]}`}
      >
        <div className={styles["about__article-box"]}>
          <Article content={text2} />
        </div>

        <div className={`${styles.about__imgs} ${styles["about__imgs--2"]}`}>
          <Image
            className={`${styles.about__img} ${styles["about__img--smiljka"]}`}
            src={"/assets/imgs/about/about-smiljka-pjevic.svg"}
            width={595}
            height={474}
            alt="Illustration of Smilja Smiljka Pjevic making the job done and builing up the reputation"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
