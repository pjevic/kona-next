/** @format */

import React from "react";

import styles from "./Form.module.scss";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.form__title}>upoznajmo se</div>

      <div className={styles.form__name}>
        <div className={styles.form__firstName}>
          <label
            className={`${styles.form__label} ${styles["form__label--firstName"]}`}
            htmlFor="firstName"
          >
            Vaše ime
          </label>
          <input
            className={`${styles.form__input} ${styles["form__input--firstName"]}`}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>

        <div className={styles.form__lastName}>
          <label
            className={`${styles.form__label} ${styles["form__label--lastName"]}`}
            htmlFor="lastName"
          >
            Vaše prezime
          </label>
          <input
            className={`${styles.form__input} ${styles["form__input--lastName"]}`}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
      </div>

      <div className={styles.form__date}>
        <label className={styles["form__date--label"]} htmlFor="start">
          Vaš datum rođenja
        </label>

        <input
          className={styles["form__date--input"]}
          type="date"
          id="start"
          name="trip-start"
          min="1945-01-01"
          max="2018-12-31"
        />
      </div>

      <div className={styles.form__gender}>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">Female</label>
      </div>

      <div className={styles.form__email}>
        <label className={styles.form__label} htmlFor="email">
          Email
        </label>
        <input className={styles.form__input} type="email" id="email" />
      </div>

      <div className={styles.form__phone}>
        <select>
          <option>Serbia</option>
          <option>USA</option>
          <option>Germany</option>
        </select>

        <input className={styles.form__input} type="number" />
      </div>

      <div className={styles.form__company}>
        <label htmlFor="yes">Da</label>
        <input type="radio" name="company" id="yes" value="yes" />
        <label htmlFor="no">Ne</label>
        <input type="radio" name="company" id="no" value="no" />
      </div>

      <div className={styles.form__companyName}>
        <label htmlFor="companyName">Naziv firme</label>
        <input className={styles.form__input} type="text" id="companyName" />
      </div>

      <div className={styles.form__companyID}>
        <label htmlFor="companyID">Matični broj</label>
        <input className={styles.form__input} type="text" id="companyID" />
      </div>

      <div className={styles.form__companyTAX}>
        <label htmlFor="companyTAX">PIB:</label>
        <input className={styles.form__input} type="text" id="companyTAX" />
      </div>

      <button className={styles.button}>pošalji</button>
    </form>
  );
}

export default Form;
