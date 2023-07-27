/** @format */

import React from "react";
import Link from "next/link";

import styles from "./BtnCTA.module.scss";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function BtnCTA() {
  return (
    <Link href="contact">
      <button style={lato.style} className={styles.btn}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        kontakt
      </button>
    </Link>
  );
}

export default BtnCTA;
