/** @format */

import React from "react";
import Image from "next/image";

import styles from "./HelloSection.module.scss";
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

function HelloSection({ teaser, line1, line2, line3 }) {
  return (
    <section className={styles.hello}>
      <div className={styles.hello__textContainer}>
        <span style={cousine.style} className={styles.hello__teaser}>
          {teaser}
        </span>

        <h1 style={dmSerifDisplay.style} className={styles.hello__heading}>
          {line1}
          <br />
          {line2}
          <br />
          {line3}
          <br />
        </h1>
      </div>
      <Image
        src="assets/imgs/waves/hero-1728px.svg"
        width={1728}
        height={1022}
        alt="waves"
        priority
      />
    </section>
  );
}

export default HelloSection;
