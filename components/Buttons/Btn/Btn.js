/** @format */

import React from "react";
import styles from "./Btn.module.scss";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Btn({ children }) {
  return (
    <button style={lato.style} className={styles.btn}>
      {children}&nbsp;&nbsp; &rarr;
    </button>
  );
}

export default Btn;
