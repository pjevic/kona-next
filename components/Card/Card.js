/** @format */

// "use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import styles from "./Card.module.scss";
import { DM_Serif_Display, DM_Sans } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CardLabel = ({ gradinet, icon1: { name, x1, x2 }, title }) => {
  return (
    <div
      className={`${styles.label} ${styles[`label__gradient--${gradinet}`]}`}
    >
      <div className={styles["label__icon-container"]}>
        <Image src={x1} width={36} height={36} alt={name} />
      </div>
      <h3 style={dmSerifDisplay.style} className={styles.label__title}>
        {title}
      </h3>
    </div>
  );
};

export default function Card({
  gradient,
  icon1,
  icon2,
  title,
  text,
  bullets,
  link,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <div className={styles.card__front}>
          <CardLabel gradinet={gradient} icon1={icon1} title={title} />

          {text.map((p, i) => (
            <p key={i} style={dmSans.style} className={styles.label__paragraph}>
              {p}
            </p>
          ))}
        </div>

        <div style={dmSans.style} className={styles.card__back}>
          <CardLabel gradinet={gradient} icon1={icon1} title={title} />

          <ul className={styles.card__bullets}>
            {bullets.map((bullet, index) => (
              <li key={index} className={styles.card__bullet}>
                <Image src={icon2.x1} width={22} height={22} alt={icon2.name} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <button className={styles.card__btn}>
            <Link className={styles.card__link} href={link}>
              Saznaj više
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
