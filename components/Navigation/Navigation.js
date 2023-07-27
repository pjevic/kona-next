/** @format */

"use client";

import React, { useState, useRef } from "react";
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
  const mobileCheckboxRef = useRef(null);

  const handleMobileMenuClick = (event) => {
    if (event.target.classList.contains(styles["navigation__mobile--link"])) {
      if (mobileCheckboxRef.current) {
        mobileCheckboxRef.current.checked = false;
      }
    }
  };

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        {/* LOGO */}
        <div className={styles["navigation__logo-container"]}>
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

        {/* DESKTOP */}
        <ul className={styles.navigation__desktop}>
          {data.map((link, index) => (
            <li
              key={index}
              className={styles["navigation__desktop--list-item"]}
            >
              <Link
                href={link.route}
                style={cousine.style}
                className={`${styles["navigation__desktop--link"]} ${
                  index === data.length - 1
                    ? styles["navigation__desktop--link-CA"]
                    : ""
                }`}
              >
                {link.rs}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE  */}
        <div
          className={styles.navigation__mobile}
          onClick={handleMobileMenuClick}
        >
          <input
            className={styles["navigation__mobile--checkbox"]}
            type="checkbox"
            id="navigation__mobile"
            ref={mobileCheckboxRef}
          />
          <label
            className={styles["navigation__mobile--button"]}
            htmlFor="navigation__mobile"
          >
            <span className={styles["navigation__mobile--icon"]}>&nbsp;</span>
          </label>

          <div className={styles["navigation__mobile--background"]}>&nbsp;</div>

          <nav className={styles["navigation__mobile--nav"]}>
            <ul className={styles["navigation__mobile--list"]}>
              {data.map((link, index) => (
                <li key={index} className={styles["navigation__mobile--item"]}>
                  <Link
                    href={link.route}
                    style={cousine.style}
                    className={styles["navigation__mobile--link"]}
                  >
                    {link.rs}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
