/** @format */
"use client";

import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ArticleContact from "@/components/Article/Contact/ArticleContact";
import GradientBox from "@/components/GradientBox/GradientBox";
import Form from "@/components/Form/Form";
import Partners from "@/components/Partners/Partners";
import Map from "@/components/Map/Map";

import data from "./data-SR.json";
import styles from "./page.module.scss";

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className={styles.contact}>
      <Hero
        teaser="tu smo da vam pomognemo"
        line1="Kontaktirajte nas"
        line2="i započnimo partnerstvo"
      />
      <section className={styles.contact__content}>
        <div className={styles["contact__img-container"]}>
          <Image
            className={styles.contact__img}
            src={"/assets/imgs/contact/img1.svg"}
            width={548}
            height={479}
            alt="Ilustracija email-a"
          />
        </div>
        <ArticleContact content={data.article1} />
      </section>

      <GradientBox>
        <Form />
        <Image
          className={styles.form__img}
          src={"/assets/imgs/form/form.svg"}
          width={517}
          height={776}
          alt="Women looking at form, illustration"
        />
      </GradientBox>

      <Partners />

      <div className={styles.contact__location}>
        <div className={styles["contact__location--img-container"]}>
          <Image
            className={styles["contact__location--img"]}
            src={"/assets/imgs/contact/img2.svg"}
            width={795}
            height={397}
            alt="Ilustracija zene koja je krenula ka nasoj lokaciji"
          />
        </div>

        <div
          style={lato.style}
          className={`${styles.contact__address} ${styles["contact__address--1"]}`}
        >
          <div className={styles["contact__address--section"]}>
            {data.address.sector_1.name}
          </div>
          <div className={styles["contact__address--street"]}>
            {data.address.sector_1.street}
          </div>
          <div className={styles["contact__address--city"]}>
            {data.address.sector_1.city}
          </div>
          <div className={styles["contact__address--phone"]}>
            <span className={styles["contact__address--phone--text"]}>
              {data.address.sector_1.phone.text}
            </span>
            <span className={styles["contact__address--phone-number"]}>
              {" "}
              {data.address.sector_1.phone.number}
            </span>
          </div>
          <div className={styles["contact__address--email"]}>
            email: {data.address.sector_1.email}
          </div>
        </div>

        <div
          style={lato.style}
          className={`${styles.contact__address} ${styles["contact__address--2"]}`}
        >
          <div className={styles["contact__address--section"]}>
            {data.address.sector_2.name}
          </div>
          <div className={styles["contact__address--street"]}>
            {data.address.sector_2.street}
          </div>
          <div className={styles["contact__address--city"]}>
            {data.address.sector_2.city}
          </div>
          <div className={styles["contact__address--phone"]}>
            <span className={styles["contact__address--phone--text"]}>
              {data.address.sector_2.phone.text}
            </span>
            <span className={styles["contact__address--phone-number"]}>
              {" "}
              {data.address.sector_2.phone.number}
            </span>
          </div>
          <div className={styles["contact__address--email"]}>
            email: {data.address.sector_2.email}
          </div>
        </div>

        <div className={`${styles.contact__map} ${styles["contact__map--1"]}`}>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <Map lat={45.831891377436776} lng={20.46804550774456} zoom={14} />
          )}
        </div>

        <div className={`${styles.contact__map} ${styles["contact__map--2"]}`}>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <Map lat={45.8397231136138} lng={20.48597606519586} zoom={14} />
          )}
        </div>

        <div className={styles.contact__map}></div>
      </div>
    </div>
  );
}

export default Contact;
