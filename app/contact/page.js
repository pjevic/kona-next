/** @format */

import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ArticleContact from "@/components/Article/Contact/ArticleContact";
import GradientBox from "@/components/GradientBox/GradientBox";
import Form from "@/components/Form/Form";
import Partners from "@/components/Partners/Partners";

import data from "./data-SR.json";
import styles from "./page.module.scss";

function Contact() {
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

        <div className={styles.contact__address}></div>
        <div className={styles.contact__address}></div>

        <div className={styles.contact__map}></div>
        <div className={styles.contact__map}></div>
      </div>
    </div>
  );
}

export default Contact;
