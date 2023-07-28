/** @format */

import React from "react";
import Image from "next/image";

import styles from "./Smiljana.module.scss";

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
    </div>
  );
}

export default Smiljana;
