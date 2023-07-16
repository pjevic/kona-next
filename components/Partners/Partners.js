/** @format */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "./data-SR.json";
import styles from "./Partners.module.scss";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const allPartners = [];
  });

  return (
    <div className={styles.partners}>
      <Image
        className={styles.partners__waves}
        src={"/assets/imgs/waves/partners-waves-1728px.svg"}
        width={1728}
        height={818}
        alt="waves"
      />
      <div className={styles.partners__box}>
        <div className={styles.partners__line}>
          <div className={styles["partners__line--1"]}>
            {data.map((logo, index) => (
              <Image
                key={index}
                src={logo.path.x2}
                width={439}
                height={135}
                alt={logo.name}
              />
            ))}
          </div>
          <div className={styles["partners__line--1"]}>
            {data.map((logo, index) => (
              <Image
                key={index}
                src={logo.path.x2}
                width={439}
                height={135}
                alt={logo.name}
              />
            ))}
          </div>
        </div>

        <div className={styles.partners__line}>
          <div className={styles["partners__line--2"]}>
            {data.map((logo, index) => (
              <Image
                key={index}
                src={logo.path.x2}
                width={439}
                height={135}
                alt={logo.name}
              />
            ))}
          </div>
          <div className={styles["partners__line--2"]}>
            {data.map((logo, index) => (
              <Image
                key={index}
                src={logo.path.x2}
                width={439}
                height={135}
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
