/** @format */

import React from "react";

import styles from "./GradientBox.module.scss";

import { Cousine } from "next/font/google";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function GradientBox({ children }) {
  return (
    <div className={styles.gradientBox}>
      <div style={cousine.style} className={styles.gradientBox__title}>
        Mi cenimo vaše vreme
      </div>
      <div className={styles.gradientBox__body}>{children}</div>
    </div>
  );
}

export default GradientBox;
