/** @format */

import React from "react";

import BtnCTA from "@/components/Buttons/BtnCTA/BtnCTA";
import Btn from "@/components/Buttons/Btn/Btn";

import styles from "./Article.module.scss";
import { DM_Serif_Display, DM_Sans, Cousine } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cousione = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Article({ content }) {
  return (
    <article style={dmSans.style} className={styles.article}>
      <span style={cousione.style} className={styles.article__teaser}>
        {content.teaser}{" "}
      </span>
      <h2 style={dmSerifDisplay.style} className={styles.article__heading}>
        {content.heading}
      </h2>
      {content.paragraph.map((p, i) => (
        <p className={styles.article__paragraph} key={i}>
          {p}
        </p>
      ))}
      <div className={styles.article__btns}>
        <BtnCTA />
        <Btn href={content.button.link}>{content.button.text}</Btn>
      </div>
    </article>
  );
}

export default Article;
