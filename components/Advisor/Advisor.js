/** @format */

import React, { useEffect, useState } from "react";

import BtnCTA from "../Buttons/BtnCTA/BtnCTA";
import Btn from "../Buttons/Btn/Btn";
import Smiljana from "../Smiljana/Smiljana";

import data from "./data-SR.json";
import styles from "./Advisor.module.scss";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerifDispaly = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function Advisor() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const screenHeight = window.screen.height;
    if (screenHeight > 1022) {
      const vhDifference = screenHeight - 1022;

      const advisorElement = document.querySelector(`.${styles.advisor}`);
      if (advisorElement) {
        advisorElement.style.transform = `translateY(-${vhDifference}px)`;
      }
    }
  }, []);

  function handleActive(i) {
    setActive(i);
  }

  return (
    <div style={dmSans.style} className={styles.advisor}>
      <div
        className={`${styles.advisor__container} ${styles["advisor__container--left"]}`}
      >
        <div className={styles.advisor__picker}>
          {data.map((advice, index) => (
            <div
              key={index}
              className={`${styles.advisor__number} ${
                active === index ? styles.active : ""
              }`}
              onClick={() => handleActive(index)}
            >
              {advice.number}
            </div>
          ))}
        </div>

        <h2 style={dmSerifDispaly.style} className={styles.advisor__heading}>
          {data[active].heading}
        </h2>

        {data[active].text.map((p, i) => (
          <p key={i} style={dmSans.style} className={styles.advisor__paragraph}>
            {p}
          </p>
        ))}
        <div className={styles.advisor__btns}>
          <BtnCTA />
          <Btn href="services">saznaj više</Btn>
        </div>
      </div>

      <div
        className={`${styles.advisor__container} ${styles["advisor__container--right"]}`}
      >
        <Smiljana />
      </div>
    </div>
  );
}

export default Advisor;
