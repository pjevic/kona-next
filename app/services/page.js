/** @format */

"use client";

import React from "react";
import { useState } from "react";
import Accordion from "@/components/Accordion/Accordion";

import data from "./data-SR.json";
import styles from "./page.module.scss";

function Services() {
  const [article, setArtcle] = useState(null);

  return (
    <div className={styles.services}>
      <div className={styles["services__container--accordion"]}>
        <Accordion data={data} setArtcle={setArtcle} />
      </div>

      <div className={styles["services__container--article"]}>
        <div className={styles["services__article"]}>
          <div className={styles["services__article--teaser"]}>
            {article?.teaser}
          </div>
          <div className={styles["services__article--heading"]}>
            {article?.title}
          </div>
          <div className={styles["services__article--text"]}>
            {article?.text.map((p, i) => (
              <div key={i}>
                {typeof p === "string" ? (
                  <p>{p}</p>
                ) : (
                  p.map((obj, i) => (
                    <div key={i}>
                      <span>{obj.bold}</span>
                      <p>{obj.regular}</p>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles["services__article-img"]}></div>
      </div>

      <div className={styles["services__container--feature"]}>
        <div className={styles["services__feature"]}></div>
      </div>
    </div>
  );
}

export default Services;
