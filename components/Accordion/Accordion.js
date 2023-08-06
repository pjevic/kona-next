/** @format */

import React from "react";
import { useState } from "react";

import styles from "./Accordion.module.scss";
import { Cousine } from "next/font/google";

// ------------------------------------------------------------------------

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ------------------------------------------------------------------------

const AccordionItem = ({
  service: { service, subService },
  currOpen,
  num,
  setCurrOpen,
  setArtcle,
}) => {
  const isOpen = num === currOpen;
  const [activeLink, setActiveLink] = useState(null);

  const handleActiveLink = (i, service) => {
    setActiveLink(i);
    setArtcle(service);
  };

  const handleOpen = () => {
    setCurrOpen(num);
  };

  return (
    <div
      style={cousine.style}
      className={`${styles["accordion-item"]}`}
      onClick={handleOpen}
    >
      <div
        className={`${styles["accordion-item--title"]} ${
          isOpen ? styles["accordion-item--title--active"] : ""
        }`}
      >
        {service}
      </div>
      <ul className={styles["accordion-item--list"]}>
        {isOpen &&
          subService.map((service, i) => (
            <li
              key={i}
              className={`${styles["accordion-item--link"]} ${
                activeLink === i ? styles["accordion-item--link--active"] : ""
              }`}
              onClick={() => handleActiveLink(i, service)}
            >
              {service.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

// ------------------------------------------------------------------------

const Accordion = ({ data, setArtcle }) => {
  const [currOpen, setCurrOpen] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className={styles.accordion}>
      <div
        style={cousine.style}
        className={styles["accordion__container--title"]}
      >
        {data.title}
      </div>

      <div className={styles["accordion__container--body"]}>
        {data.services.map((service, i) => (
          <AccordionItem
            key={i}
            service={service}
            currOpen={currOpen}
            num={i}
            setCurrOpen={setCurrOpen}
            setArtcle={setArtcle}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
