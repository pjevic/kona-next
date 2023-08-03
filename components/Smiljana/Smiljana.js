/** @format */

import React from "react";
import Image from "next/image";

import data from "./data-SR";
import styles from "./Smiljana.module.scss";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function Smiljana() {
  return (
    <div>
      <Image
        className={styles.smiljana}
        src={"/assets/imgs/smiljana/smiljanaSimic-2x.png"}
        alt="Smiljana Simic"
        width={597}
        height={767}
        priority
      />
      <div>
        <div style={dmSans.style} className={styles.smiljana__title}>
          {data.title}
        </div>
        <div style={dmSerifDisplay.style} className={styles.smiljana__name}>
          Smiljana Simić
        </div>
      </div>
    </div>
  );
}

export default Smiljana;
