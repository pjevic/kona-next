/** @format */

import React from "react";
import Image from "next/image";

import HelloSection from "@/components/Hero/Hero";
import ArticlePartners from "@/components/Article/Partners/ArticlePartners";
import Partners from "@/components/Partners/Partners";

import styles from "./page.module.scss";
import data from "./data-SR.json";
const { article1, article2 } = data;

function PartnersPage() {
  return (
    <div className={styles.parners}>
      <HelloSection
        teaser="naši partneri"
        line1="Kompanije koje nam"
        line2="ukazuju porverenje"
      />

      <section className={styles.partners__section}>
        <ArticlePartners content={article1} />
        <div className={styles["partners__img-container"]}>
          <Image
            className={styles.partners__img}
            src={"/assets/imgs/partners/img/img1.svg"}
            width={548}
            height={621}
            alt="Ilustracija zene koja slavi pobedu svog distignuca"
          />
        </div>
      </section>

      <Partners />

      <section className={styles.partners__section}>
        <ArticlePartners content={article2} />
        <div className={styles["partners__img-container"]}>
          <Image
            className={styles.partners__img}
            src={"/assets/imgs/partners/img/img2.svg"}
            width={548}
            height={621}
            alt="Ilustracija rukovanja nakon potpisanog ugovora"
          />
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
