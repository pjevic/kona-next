/** @format */

import React from "react";
import data from "./data-SR.json";
import styles from "./page.module.scss";
import { Cousine, DM_Serif_Display, DM_Sans } from "next/font/google";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerifDispaly = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Blog() {
  return (
    <div style={dmSans.style}>
      {data.map((blog, i) => (
        <div key={i} className={styles.blog}>
          <span style={cousine.style} className={styles.blog__teaser}>
            {blog.teaser}
          </span>
          <h1 style={dmSerifDispaly.style} className={styles.blog__title}>
            {blog.title}
          </h1>
          {blog.text.map((item, j) => {
            if (typeof item === "string") {
              return (
                <p key={`p_${j}`} className={styles.blog__paragraph}>
                  {item}
                </p>
              );
            } else if (typeof item === "object") {
              if (Array.isArray(item)) {
                return (
                  <ol key={`ul_${j}`} className={styles.blog__list}>
                    {item.map((subitem, k) => (
                      <li key={`li_${k}`} className={styles["blog__list-item"]}>
                        <span className={styles["blog__list-item--bold"]}>
                          {subitem.bold}
                        </span>{" "}
                        <span className={styles["blog__list-item--regular"]}>
                          {subitem.regular}
                        </span>
                      </li>
                    ))}
                  </ol>
                );
              } else if (item.subtitle) {
                return (
                  <h2
                    style={dmSerifDispaly.style}
                    key={`h2_${j}`}
                    className={styles.blog__subtitle}
                  >
                    {item.subtitle}
                  </h2>
                );
              }
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}

export default Blog;
