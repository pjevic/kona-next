/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        className={styles.footer__waves}
        src="/assets/imgs/waves/waves-footer-1728px.svg"
        width={1728}
        height={761}
        alt="Background image with moving waves in a gradient from Midnight Blue to Magenta Pink"
      />

      <div className={styles.footer__body}>
        <div className={styles["footer__body--container"]}>
          <Image
            className={styles.footer__logo}
            src="/assets/imgs/logo/KONA-logo-whiteFill.svg"
            alt="KO-NA logo"
            width={122}
            height={36}
            priority
          />

          <div className={styles.footer__company}>{data.name}</div>

          <div className={styles["footer__company--description"]}>
            {data.description}
          </div>

          <div className={styles["footer__company--data"]}>
            <div className={styles["footer__company--mb"]}>MB: {data.MB}</div>
            <div className={styles["footer__company--pib"]}>
              PIB: {data.PIB}
            </div>
          </div>

          <div className={styles["footer__company--social"]}>
            <Link className={styles["footer__company--link"]} href={"/"}>
              {data.social.linkedIn.title}
            </Link>

            <Link className={styles["footer__company--link"]} href={"/"}>
              {data.social.facebook.title}
            </Link>
          </div>

          <div className={styles.footer__department1}>
            {data.department.dep1.name}
          </div>

          <div className={styles["footer__department1--address"]}>
            <div className={styles["footer__address--street"]}>
              {data.department.dep1.address}
            </div>
            <div className={styles["footer__address--city"]}>
              {data.department.dep1.city}
            </div>
          </div>

          <div className={styles["footer__department1--contact"]}>
            <div>
              <div className={styles["footer__contact--phone"]}>
                <Image
                  className={styles.footer__icons}
                  src={data.department.dep1.phoneIcon}
                  width={15}
                  height={15}
                  alt="Phone Icon"
                />
                <span>{data.department.dep1.phone}</span>
              </div>

              <div className={styles.footer__line}>
                <Image
                  className={styles.footer__icons}
                  src={data.department.dep1.emailIcon}
                  width={15}
                  height={15}
                  alt="Email Icon"
                />
                <span>{data.department.dep1.email}</span>
              </div>
            </div>
          </div>

          <div className={styles.footer__department2}>
            {data.department.dep2.name}
          </div>
          <div className={styles["footer__department2--address"]}>
            <div className={styles["footer__address--street"]}>
              {data.department.dep2.address}
            </div>
            <div className={styles["footer__address--city"]}>
              {data.department.dep2.city}
            </div>
          </div>
          <div className={styles["footer__department2--contact"]}>
            <div>
              <div className={styles["footer__contact--phone"]}>
                <Image
                  className={styles.footer__icons}
                  src={data.department.dep2.phoneIcon}
                  width={15}
                  height={15}
                  alt="Phone Icon"
                />
                <span>{data.department.dep2.phone}</span>
              </div>

              <div className={styles.footer__line}>
                <Image
                  className={styles.footer__icons}
                  src={data.department.dep2.emailIcon}
                  width={15}
                  height={15}
                  alt="Email Icon"
                />
                <span>{data.department.dep2.email}</span>
              </div>
            </div>
          </div>

          <div className={styles.footer__services}>{data.services.title}</div>
          <ul className={styles["footer__services--list"]}>
            {data.services.services.map((s, i) => (
              <Link
                className={styles["footer__services--link"]}
                key={i}
                href={s.link}
              >
                {s.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
