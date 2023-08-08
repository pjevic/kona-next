/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BtnCTA from "@/components/Buttons/BtnCTA/BtnCTA";

import Hero from "@/components/Hero/Hero";
import Article from "@/components/Article/Article";

import data from "./data_SR.json";
import styles from "./page.module.scss";
import { Lato, Cousine, DM_Serif_Display, DM_Sans } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerifDispay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const { text1, text2 } = data;

function About() {
  return (
    <div className={styles.about}>
      <Hero
        // style={{ transform: "translateY(0rem)", marginTop: "8rem" }}
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

      <div className={styles["about__blog-container"]}>
        <div style={lato.style} className={styles["about__blog-title"]}>
          {data.blog.barline}
        </div>

        <div style={lato.style} className={styles["about__blog-body"]}>
          <div className={styles["about__blog-intro"]}>
            <div
              style={cousine.style}
              className={styles["about__blog-intro--teaser"]}
            >
              {data.blog.intro.teaser}
            </div>
            <h2
              style={dmSerifDispay.style}
              className={styles["about__blog-intro--title"]}
            >
              {data.blog.intro.title}
            </h2>
            <p
              style={dmSans.style}
              className={styles["about__blog-intro--text"]}
            >
              {data.blog.intro.text}
            </p>

            <Link href={data.blog.intro.btn.link}>
              <button
                style={lato.style}
                className={styles["about__blog-intro--btn"]}
              >
                {data.blog.intro.btn.text} &nbsp;&nbsp;&nbsp;
                <span>&rarr;</span>
              </button>
            </Link>
          </div>
          <Image
            className={styles["about__blog-img"]}
            src={"/assets/imgs/about/about-blog.svg"}
            width={521.89}
            height={330}
            alt="Illustration of a women sitting at her work desk and posting a blog"
          />
          {data.blog.preview.map((p, i) => (
            <div
              key={i}
              className={`${styles["about__blog-preview"]} ${
                styles[`about__blog-preview--${i + 1}`]
              }`}
            >
              <div
                style={cousine.style}
                className={styles["about__blog-preview--teaser"]}
              >
                {p.teaser}
              </div>
              <h3
                style={dmSerifDispay.style}
                className={styles["about__blog-preview--title"]}
              >
                {p.title}
              </h3>
              <p
                style={dmSans.style}
                className={styles["about__blog-preview--text"]}
              >
                {p.text}
              </p>
              <BtnCTA text="saznaj više" href="blog" />
            </div>
          ))}
        </div>
      </div>

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
