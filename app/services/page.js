/** @format */

"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";
import data from "./data-SR.json";
import styles from "./page.module.scss";
import { Cousine, DM_Serif_Display, Lato } from "next/font/google";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerifDispay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Services() {
  const [article, setArtcle] = useState(null);

  return (
    <div className={styles.services}>
      <div className={styles["services__container--accordion"]}>
        <Accordion data={data} setArtcle={setArtcle} />
      </div>

      <div className={styles["services__container--article"]}>
        <div className={styles["services__article"]}>
          <div
            style={cousine.style}
            className={styles["services__article--teaser"]}
          >
            {article?.teaser}
          </div>
          <h1
            style={dmSerifDispay.style}
            className={styles["services__article--heading"]}
          >
            {article?.title}
          </h1>
          <div style={lato.style} className={styles["services__article--text"]}>
            {article?.text.map((p, i) => (
              <ul key={i} className={styles["services__article--text--list"]}>
                {typeof p === "string" ? (
                  <p>{p}</p>
                ) : (
                  p.map((obj, i) => (
                    <div key={i}>
                      <li>
                        {obj.bold} &nbsp;
                        <p>{obj.regular}</p>
                      </li>
                    </div>
                  ))
                )}
              </ul>
            ))}
          </div>
        </div>

        <div className={styles["services__article-img"]}>
          {article && (
            <Image
              className={styles["services__article-img--style"]}
              src={article?.imgPath}
              width={100}
              height={100}
              alt={`Ilustracija ${article?.teaser}`}
            />
          )}
        </div>
      </div>

      <div
        style={cousine.style}
        className={styles["services__container--feature"]}
      >
        {article?.teaser}
      </div>
    </div>
  );
}

export default Services;
