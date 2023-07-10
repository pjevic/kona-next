/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.scss";

import data from "./data.json";

function Navigation() {
  return (
    <header>
      <div></div>
      <nav className={styles.navigation}>
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
            <li
              key={index}
              className={`${styles.navigation__link} ${
                index === data.length - 1 ? styles["navigation__link--ca"] : ""
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </header>
  );
}

export default Navigation;
