/** @format */

import React, { useState } from "react";
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
      <div className={styles.adviser__picker}>
        <div
          className={`${styles.adviser__number} ${
            active === 0 ? styles.active : ""
          }`}
          onClick={() => handleActive(0)}
        >
          Prvi savet{" "}
        </div>
        <div
          className={`${styles.adviser__number} ${
            active === 1 ? styles.active : ""
          }`}
          onClick={() => handleActive(1)}
        >
          Drugi savet{" "}
        </div>
        <div
          className={`${styles.adviser__number} ${
            active === 2 ? styles.active : ""
          }`}
          onClick={() => handleActive(2)}
        >
          Treći savet{" "}
        </div>
      </div>

      <h2 style={dmSerifDispaly.style} className={styles.adviser__heading}>
        Dobar računovđa je jedan od tvojih glavnih partnera
      </h2>
      <p style={dmSans.style} className={styles.adviser__paragraph}>
        Dobar računovođa je ključni partner svakog poslovanja. Osim što pratimo
        finansijske transakcije i sačinjavamo vaše finansijke izveštaje, igramo
        važnu ulogu u davanju strateških saveta za rast i razvoj vaše kompanije.
        Mi smo uvek tu da pružimo podršku kada smo vam potrebni, sačinjavajući
        vaše finansijske izveštaje, pomažući vam da planirate budžete i
        analizirate troškove.
      </p>
      <p style={dmSans.style} className={styles.adviser__paragraph}>
        Kao dobar računovođa mi ćemo takođe biti upoznati sa vašom industrijskom
        granom, što znači da ćemo biti u mogućnosti da pružimo specifične savete
        koji su relevantni za vaše poslovanje. Uz dobro obaveštene savetnike
        koji prate vašu finansijsku situaciju, moći ćete da donosite bolje
        odluke i da upravljate vašim poslovanjem na održiviji i profitabilniji
        način. Zato, ako tražite partnera koji će vam pomoći da izgradite i
        unapredite vaš biznis, dobar računovođa je neophodan deo vašeg glavnog
        tima.
      </p>
    </div>
  );
}

export default Adviser;
