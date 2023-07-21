/** @format */

import React from "react";
import Image from "next/image";

import data from "./data-SR.json";
import styles from "./Footer.module.scss";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <footer className={styles.footer} style={lato.style}>
      <Image
        src="/assets/imgs/waves/waves-footer-1728px.svg"
        width={1728}
        height={761}
        alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
      />

      <div className={styles.footer__body}>
        <Image
          className={styles.footer__logo}
          src="/assets/imgs/logo/KONA-logo-whiteFill.svg"
          alt="KO-NA logo"
          width={122}
          height={36}
          priority
        />

        <div className={styles.footer__company}>KO-NA DOO</div>
        <div className={styles["footer__company--description"]}>
          Društvo za špediciju, <br />
          računovodstveno-knjigovodstvene <br />
          usluge, poslovne usluge i trgovinu <br />
          KO-NA DOO Kikinda
        </div>
        <div className={styles["footer__company--data"]}>
          MB: 08505322 <br />
          PIB: 100509320
          <br />
        </div>
        <div className={styles["footer__company--social"]}>
          LinkedIn
          <br />
          Facebook
          <br />
        </div>

        <div className={styles.footer__department1}>Špedicija</div>
        <div className={styles["footer__department1--address"]}>
          Oslobođenja 9<br />
          23300 Kikinda
        </div>
        <div className={styles["footer__department1--contact"]}>
          <div>
            <div className={styles.footer__line}>
              <Image
                className={styles.footer__icons}
                src="/assets/imgs/icons/phone.svg"
                width={15}
                height={15}
                alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
              />
              <span>+381230123456</span>
            </div>
            <div className={styles.footer__line}>
              <Image
                className={styles.footer__icons}
                src="/assets/imgs/icons/email.svg"
                width={15}
                height={15}
                alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
              />
              <span>spedicija@kona.rs</span>
            </div>
          </div>
        </div>

        <div className={styles.footer__department2}>Računovodstvo</div>
        <div className={styles["footer__department2--address"]}>
          Trg srpskih dobrovoljaca 51/1
          <br />
          23300 Kikinda
        </div>
        <div className={styles["footer__department2--contact"]}>
          <div>
            <div className={styles.footer__line}>
              <Image
                className={styles.footer__icons}
                src="/assets/imgs/icons/phone.svg"
                width={15}
                height={15}
                alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
              />
              <span>+381230123456</span>
            </div>
            <div className={styles.footer__line}>
              <Image
                className={styles.footer__icons}
                src="/assets/imgs/icons/email.svg"
                width={15}
                height={15}
                alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
              />
              <span>racunovodstvo@kona.rs</span>
            </div>
          </div>
        </div>

        <div className={styles.footer__services}>Usluge</div>
        <ul className={styles["footer__services--list"]}>
          <li>Carinsko zastupanje</li>
          <li>Računovodstvene usluge</li>
          <li>Knjigovodstvene usluge</li>
          <li>-----------------------</li>
          <li>Osnivanje firme</li>
          <li>Obračun PDV-a </li>
          <li>Obračun zarada</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
