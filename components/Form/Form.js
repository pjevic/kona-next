/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Cousine, Lato } from "next/font/google";
import { DevTool } from "@hookform/devtools";
import PhoneInput from "react-phone-input-2";

import styles from "./Form.module.scss";
import "react-phone-input-2/lib/style.css";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Form() {
  const form = useForm({
    defaultValues: {
      name: {
        firstName: "",
        lastName: "",
      },
      dob: "",
      gender: "",
      email: "",
      phone: "",
      company: {
        isCompany: "",
        name: "",
        id: "",
        taxID: "",
      },
    },
    mode: "onTouched",
  });

  const [phoneNumber, setPhoneNumber] = useState("");

  const { register, control, handleSubmit, formState, reset, watch } = form;

  const { errors, isDirty, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    data.phone = phoneNumber;
    console.log("Form submmited", data);

    // here I can use "data" to post it on an API endpoint
  };

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const isCompany = watch("company.isCompany") === "no";

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setPhoneNumber("381");
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={lato.style}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div style={cousine.style} className={styles.form__title}>
          upoznajmo se
        </div>

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
              {...register("name.firstName", {
                required: {
                  value: true,
                  message: "Vaše ime je obavezno.",
                },
              })}
            />
            <p className={styles.error}>{errors.name?.firstName?.message}</p>
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
              {...register("name.lastName", {
                required: {
                  value: true,
                  message: "Vaše prezime je obavezno.",
                },
              })}
            />
            <p className={styles.error}>{errors.name?.lastName?.message}</p>
          </div>
        </div>

        <div className={styles.form__date}>
          <div className={styles}>
            <label
              className={`${styles} ${styles["form__label--firstName"]}`}
              htmlFor="dob"
            >
              Vas datum rodjenja
            </label>

            <input
              className={`${styles.form__input} ${styles["form__input--firstName"]}`}
              type="date"
              id="dob"
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Vaš datum rođenja je obavezan.",
                },
              })}
            />
            <p className={styles.error}>{errors.dob?.message}</p>
          </div>
        </div>

        <div className={styles.form__gender}>
          <input
            type="radio"
            id="male"
            value="male"
            {...register("gender", {
              required: {
                value: true,
                message: "Ovo polje je obavezno.",
              },
            })}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            value="female"
            {...register("gender", {
              required: {
                value: true,
                message: "Ovo polje je obavezno.",
              },
            })}
          />
          <label htmlFor="female">Female</label>
          <p className={styles.error}>{errors.gender?.message}</p>
        </div>

        <div className={styles.form__email}>
          <label className={styles.form__label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.form__input}
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email je obavezan.",
              },
              pattern: {
                value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                message: "Email nije validan.",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@kona.rs" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("kona.rs") ||
                    "This domain is not supported."
                  );
                },
              },
            })}
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div className={styles.form__phone}>
          <label htmlFor="phone">Vaš telefon</label>
          <PhoneInput
            id="phone"
            country="rs"
            type="tel"
            name="phone"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <p className={styles.error}>{errors.phone?.message}</p>
        </div>

        <div className={styles.form__company}>
          <label htmlFor="yes">Da</label>
          <input
            type="radio"
            id="yes"
            value="yes"
            {...register("company.isCompany", {
              required: {
                value: true,
                message: "Ovaj unos je obavezan.",
              },
            })}
          />
          <label htmlFor="no">Ne</label>
          <input
            type="radio"
            id="no"
            value="no"
            {...register("company.isCompany", {
              required: {
                value: true,
                message: "Ovaj unos je obavezan.",
              },
            })}
          />
          <p className={styles.error}>{errors.company?.isCompany?.message}</p>
        </div>

        <div className={styles.form__companyName}>
          <label htmlFor="companyName">Naziv firme</label>
          <input
            className={styles.form__input}
            type="text"
            id="companyName"
            {...register("company.name", {
              required: {
                value: true,
                message: "Ovaj podatak je obavezan.",
              },
              disabled: isCompany,
            })}
          />
          <p className={styles.error}>{errors.company?.name?.message}</p>
        </div>

        <div className={styles.form__companyID}>
          <label htmlFor="companyID">Matični broj</label>
          <input
            className={styles.form__input}
            type="number"
            id="companyID"
            {...register("company.id", {
              pattern: {
                value: /^\d{8}$/,
                message: "MB mora sadržati 8 cifara.",
              },
              disabled: isCompany,
            })}
          />
          <p className={styles.error}>{errors.company?.id?.message}</p>
        </div>

        <div className={styles.form__companyTAX}>
          <label htmlFor="companyTAX">PIB:</label>
          <input
            className={styles.form__input}
            type="number"
            id="companyTAX"
            {...register("company.taxID", {
              pattern: {
                value: /^\d{9}$/,
                message: "PIB mora sadržati 9 cifara.",
              },
              disabled: isCompany,
            })}
          />
          <p className={styles.error}>{errors.company?.taxID?.message}</p>
        </div>

        <button className={styles.button} disabled={!isDirty}>
          POSALJI
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form;
