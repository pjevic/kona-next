/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";

import data from "./data.json";
import styles from "./Navigation.module.scss";
import { Cousine } from "next/font/google";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Navigation() {
  return (
    <header className={styles.navigation__container}>
      {/* Desktop navigation */}

      {/* <nav className={styles.navigation}>
        <div>
          <Link href="/">
            <Image
              src="assets/imgs/logo/KONA-logo-whiteFill.svg"
              alt="KO-NA logo"
              width={122}
              height={36}
              priority
            />
          </Link>
        </div>

        <ul className={styles.navigation__links}>
          {data.map((link, index) => (
            <li key={index}>
              <Link
                href={link.route}
                style={cousine.style}
                className={`${styles.navigation__link} ${
                  index === data.length - 1
                    ? styles["navigation__link--ca"]
                    : ""
                }`}
              >
                {link.rs}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Mobile navigation */}
      <div className={styles.mob}>
        <input className={styles.mob__checkbox} type="checkbox" id="mob" />
        <label className={styles.mob__button} htmlFor="mob">
          <span className={styles.mob__icon}>&nbsp;</span>
        </label>

        <div className={styles.mob__background}>&nbsp;</div>

        <nav className={styles.mob__nav}>
          <ul className={styles.mob__list}>
            {data.map((link, index) => (
              <li key={index} className={styles.mob__item}>
                <Link
                  href={link.route}
                  style={cousine.style}
                  className={styles.mob__link}
                >
                  {link.rs}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
