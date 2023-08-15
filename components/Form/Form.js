/** @format */

"use client";

import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Cousine, Lato } from "next/font/google";
import { DevTool } from "@hookform/devtools";
import PhoneInput from "react-phone-input-2";
import data from "./data-SR.json";

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
      agreement: "",
    },
    mode: "onTouched",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [toggleAgreement, setToggleAgreement] = useState(false);
  const [togglePrivacy, setTogglePrivacy] = useState(false);
  const [phoneStyle, setPhoneStyle] = useState({
    container: {},
    input: {
      fontSize: "1.4rem",
      width: "70%",
      height: "3.5rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
    },
  });

  const { register, control, handleSubmit, formState, reset, watch } = form;
  const { errors, isDirty, isSubmitSuccessful } = formState;

  const formRef = useRef();

  const onSubmit = (data) => {
    data.phone = phoneNumber;
    console.log("Form submmited", data);

    const serviceID = "service_vbh2dcp";
    const templateID = "template_wg230do";
    const publicKey = "KhWQp7tRKNQams5UU";
    const templateParms = {
      firstName: data.name?.firstName || "",
      lastName: data.name?.lastName || "",
      dob: data.dob || "",
      gender: data.gender || "",
      email: data.email || "",
      phone: data.phone || "",
      isCompany: data.company?.isCompany || false,
      name: data.company?.name || "",
      id: data.company?.id || "",
      taxID: data.company?.taxID || "",
    };

    emailjs.send(serviceID, templateID, templateParms, publicKey).then(
      (response) => {
        console.log("Email sent successfully!", response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const isCompany = watch("company.isCompany") === "no";

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const handleScreenChange = () => {
    if (window.innerWidth < 500) {
      setPhoneStyle((prevStyle) => ({
        ...prevStyle,
        input: {
          ...prevStyle.input,
          width: "100%",
        },
      }));
    } else {
      setPhoneStyle((prevStyle) => ({
        ...prevStyle,
        input: {
          ...prevStyle.input,
          width: "70%", // Restore the original width property (70%)
        },
      }));
    }
  };

  const handleToggleAgreement = () => {
    setToggleAgreement(!toggleAgreement);
  };

  const handleTogglePrivacy = () => {
    setTogglePrivacy(!togglePrivacy);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setPhoneNumber("381");
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    handleScreenChange();

    window.addEventListener("resize", handleScreenChange);

    return () => {
      window.removeEventListener("resize", handleScreenChange);
    };
  }, []);

  return (
    <div style={lato.style} ref={formRef}>
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

        <div className={styles.form__birth}>
          <div className={styles.form__date}>
            <div className={styles}>
              <label
                className={`${styles.form__label} ${styles["form__label--dob"]}`}
                htmlFor="dob"
              >
                Vaš datum rodjenja
              </label>

              <input
                className={`${styles.form__input} ${styles["form__input--dob"]}`}
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

          <div>
            <div
              className={`${styles.form__label} ${styles["form__label--firstName"]}`}
            >
              Pol
            </div>
            <div className={styles.form__gender}>
              <label
                className={`${styles["form__label-radio"]} ${styles["form__label-radio--male"]}`}
                htmlFor="male"
              >
                <input
                  className={`${styles["form__input-radio"]} ${styles["form__input-radio--male"]}`}
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
                Muško
                <span
                  className={`${styles["form__input-span"]} ${styles["form__input-span--male"]}`}
                  htmlFor="male"
                ></span>{" "}
              </label>

              <label
                className={`${styles["form__label-radio"]} ${styles["form__label-radio--female"]}`}
                htmlFor="female"
              >
                <input
                  type="radio"
                  id="female"
                  value="female"
                  className={`${styles["form__input-radio"]} ${styles["form__input-radio--female"]}`}
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Ovo polje je obavezno.",
                    },
                  })}
                />
                Žensko
                <span
                  className={`${styles["form__input-span"]} ${styles["form__input-span--female"]}`}
                ></span>{" "}
              </label>

              <p className={styles.error}>{errors.gender?.message}</p>
            </div>
          </div>
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
          <label className={styles.form__label} htmlFor="phone">
            Vaš telefon
          </label>
          <PhoneInput
            containerStyle={phoneStyle.container}
            inputStyle={phoneStyle.input}
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
          <div
            className={`${styles["form__label-radio"]} ${styles["form__label-radio--company"]}`}
          >
            Da li ste aktivno pravno lice
          </div>
          <div>
            <label
              className={`${styles["form__label-radio"]} ${styles["form__label-radio--male"]}`}
              htmlFor="yes"
            >
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
              Da
              <span
                className={`${styles["form__input-span"]} ${styles["form__input-span--male"]}`}
              ></span>
            </label>

            <label
              className={`${styles["form__label-radio"]} ${styles["form__label-radio--female"]}`}
              htmlFor="no"
            >
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
              Ne
              <span
                className={`${styles["form__input-span"]} ${styles["form__input-span--male"]}`}
              ></span>
            </label>
            <p className={styles.error}>{errors.company?.isCompany?.message}</p>
          </div>
        </div>

        <div className={styles.form__companyName}>
          <label className={styles.form__label} htmlFor="companyName">
            Naziv firme
          </label>
          <input
            className={`${styles.form__input} ${styles["form__input--companyName"]}`}
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
          <label className={styles.form__label} htmlFor="companyID">
            Matični broj
          </label>
          <input
            className={`${styles.form__input} ${styles["form__input--companyID"]}`}
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
          <label className={styles.form__label} htmlFor="companyTAX">
            PIB:
          </label>
          <input
            className={`${styles.form__input} ${styles["form__input--companyTAX"]}`}
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

        <div className={styles.form__agreement}>
          <input
            className={styles["form__agreement--input"]}
            type="checkbox"
            id="agreement"
            {...register("agreement", {
              required: {
                value: true,
                message:
                  "Da biste nastavili, morate se složiti sa uslovima korišćenja i politikom privatnosti.",
              },
            })}
          />
          <label
            className={styles["form__agreement--label"]}
            htmlFor="agreement"
          >
            Da, slažem se sa &nbsp;
          </label>
          <span
            className={styles["form__agreement--span"]}
            onClick={handleToggleAgreement}
          >
            uslovima korišćenja
          </span>{" "}
          <span
            className={styles["form__agreement--span"]}
            onClick={handleTogglePrivacy}
          >
            i politikom privatnosti.
          </span>
          <p className={styles.error}>{errors.agreement?.message}</p>
        </div>

        <button className={styles.button} disabled={!isDirty}>
          POSALJI
        </button>
      </form>

      <div
        className={`${styles.popup} ${
          toggleAgreement ? styles.popupActive : ""
        }`}
      >
        <div className={styles.popup__container}>
          <h4 className={styles.popup__title}>
            {data.agreement.conditions.title}
          </h4>

          <div className={styles.popup__paragraph}>
            {data.agreement.conditions.description}
          </div>

          {data.agreement.conditions.condition.map((c, i) => (
            <div key={i} className={styles.popup__box}>
              <h5 className={styles.popup__subtitle}>{c.title}</h5>
              <p className={styles.popup__paragraph}>{c.text}</p>
            </div>
          ))}

          <button className={styles.popup__btn} onClick={handleToggleAgreement}>
            zatvori
          </button>
        </div>
      </div>

      <div
        className={`${styles.popup} ${togglePrivacy ? styles.popupActive : ""}`}
      >
        <div className={styles.popup__container}>
          <h4 className={styles.popup__title}>
            {data.agreement.privacy.title}
          </h4>

          <div className={styles.popup__paragraph}>
            {data.agreement.privacy.description}
          </div>

          {data.agreement.privacy.content.map((c, i) => (
            <div key={i} className={styles.popup__box}>
              <h5 className={styles.popup__subtitle}>{c.title}</h5>
              <p className={styles.popup__paragraph}>{c.text}</p>
            </div>
          ))}

          <button className={styles.popup__btn} onClick={handleTogglePrivacy}>
            zatvori
          </button>
        </div>
      </div>

      <DevTool control={control} />
    </div>
  );
}

export default Form;
