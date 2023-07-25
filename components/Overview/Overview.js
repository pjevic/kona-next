/** @format */

import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import BtnCTA from "../Buttons/BtnCTA/BtnCTA";
import Btn from "../Buttons/Btn/Btn";

import data from "./data-SR.json";
import styles from "./Overview.module.scss";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.overview__barline}>
        <Image
          className={styles.overview__logo}
          width={129}
          height={33.75}
          src={" /assets/imgs/logo/KONA-logo-whiteFill.svg"}
          alt="logo"
        />
      </div>

      <div className={styles.overview__body}>
        <h2 style={dmSerifDisplay.style} className={styles.overview__title}>
          {data.title}
        </h2>

        <div className={styles.overview__text}>
          <div className={styles.overview__col1}>
            <p className={styles.overview__paragraph}>{data.text1}</p>

            <ul className={styles.overview__list}>
              {data.bullets.map((bullet, index) => {
                return (
                  <li key={index} className={styles.overview__listItem}>
                    {bullet}
                  </li>
                );
              })}
            </ul>

            {data.text2.map((p, i) => {
              return (
                <p key={i} className={styles.overview__paragraph}>
                  {p}
                </p>
              );
            })}
          </div>

          <div className={styles.overview__col2}>
            {data.text3.map((p, i) => (
              <p key={i} className={styles.overview__paragraph}>
                {p}
              </p>
            ))}
          </div>

          <Image
            className={styles.overview__img}
            width={497}
            height={254}
            src={"/assets/imgs/overview/overview.svg"}
            alt={"Illustration of 3 team members coleboratiog"}
          />

          <div className={styles.overview__btnsContainer}>
            <BtnCTA />
            <Btn>saznaj više</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
