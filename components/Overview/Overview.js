/** @format */

import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import data from "./data-SR.json";
import styles from "./Overview.module.scss";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.overview__barline}>
        <Image className={styles.overview__logo} alt="logo" />
      </div>
      <div className={styles.overview__body}>
        <h2 className={styles.overview__title}>{data.title}</h2>
      </div>
    </div>
  );
}
