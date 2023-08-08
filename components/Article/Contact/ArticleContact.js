/** @format */

import React from "react";

import styles from "./ArticleContact.module.scss";
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

function ArticleContact({ content }) {
  return (
    <article style={dmSans.style} className={styles.article}>
      <span style={cousione.style} className={styles.article__teaser}>
        {content.teaser}
      </span>
      <h2 style={dmSerifDisplay.style} className={styles.article__heading}>
        {content.heading}
      </h2>
      {content.paragraph.map((p, i) => (
        <p className={styles.article__paragraph} key={i}>
          {p}
        </p>
      ))}
    </article>
  );
}

export default ArticleContact;
