/** @format */

import React from "react";
import Link from "next/link";
import styles from "./Btn.module.scss";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Btn({ children, href, customStyle }) {
  return (
    <Link href={href}>
      <button style={lato.style} className={styles.btn}>
        {children}&nbsp; &rarr;
      </button>
    </Link>
  );
}

export default Btn;
