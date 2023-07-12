/** @format */

import React, { useState } from "react";

import BtnCTA from "../Buttons/BtnCTA/BtnCTA";
import Btn from "../Buttons/Btn/Btn";
import Smiljana from "../Smiljana/Smiljana";

import data from "./data-SR.json";
import styles from "./Adviser.module.scss";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerifDispaly = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function Adviser() {
  const [active, setActive] = useState(0);

  function handleActive(i) {
    setActive(i);
  }

  return (
    <div style={dmSans.style} className={styles.adviser}>
      <div
        className={`${styles.adviser__container} ${styles["adviser__container--left"]}`}
      >
        <div className={styles.adviser__picker}>
          {data.map((advice, index) => (
            <div
              key={index}
              className={`${styles.adviser__number} ${
                active === index ? styles.active : ""
              }`}
              onClick={() => handleActive(index)}
            >
              {advice.number}
            </div>
          ))}
        </div>

        <h2 style={dmSerifDispaly.style} className={styles.adviser__heading}>
          {data[active].heading}
        </h2>

        {data[active].text.map((p, i) => (
          <p key={i} style={dmSans.style} className={styles.adviser__paragraph}>
            {p}
          </p>
        ))}
        <div className={styles.adviser__btns}>
          <BtnCTA />
          <Btn>saznaj više</Btn>
        </div>
      </div>

      <div
        className={`${styles.adviser__container} ${styles["adviser__container--right"]}`}
      >
        <Smiljana />
      </div>
    </div>
  );
}

export default Adviser;
