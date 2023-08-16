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
  const defaultArticle = {
    imgPath: "/assets/imgs/services/osnivanje_firme.svg",
    name: "Pregled naših usluga",
    teaser: "Naše usluge",
    title: "Pregled naših usluga",
    text: [
      "Dobrodošli na stranicu sa detaljnim opisom našeg raznovrsnog spektra usluga. Naš fokus je podrška vašem poslovanju u postizanju vaših ciljeva.",

      [
        {
          bold: "Osnivanje firme:",
          regular:
            "Nudimo sveobuhvatan vodič za uspešno pokretanje vašeg preduzeća. Od pravne regulative do poslovne strategije, podržavamo vas na putu ka uspehu.",
        },
        {
          bold: "Knjigovodstvo:",
          regular:
            "Naš tim stručnjaka pruža precizne i pouzdane finansijske informacije. Kroz analize i projekcije, podržavamo vaše odluke za dugoročni finansijski rast.",
        },
        {
          bold: "Računovodstvo:",
          regular:
            "Investitori traže jasnu sliku vašeg poslovanja. Naša usluga omogućava vam da precizno prikažete svoje finansijske rezultate i strategije, stvarajući povjerenje kod potencijalnih partnera.",
        },
        {
          bold: "Obračun PDV-a:",
          regular:
            "Složenost obračuna PDV-a zahteva stručnost. Naš tim vam pruža tehničku podršku i smernice za tačan i zakonit obračun PDV-a, minimizirajući rizike.",
        },
        {
          bold: "Obračun zarada:",
          regular:
            "Srećni zaposleni su produktivni zaposleni. Obezbeđujemo tačan i pravilan obračun zarada i poreza, pružajući stabilnost i sigurnost vašem osoblju.",
        },

        {
          bold: "Carinsko zastupanje",
          regular:
            "Međunarodno poslovanje zahteva pažljivo praćenje carinskih procesa. Olakšavamo prelazak granica, smanjujući birokratiju i omogućavajući vam nesmetanu trgovinu.",
        },
      ],
    ],
  };

  const [article, setArtcle] = useState(defaultArticle);

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
