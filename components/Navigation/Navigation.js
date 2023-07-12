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
      </nav>
      <div></div>
    </header>
  );
}

export default Navigation;
