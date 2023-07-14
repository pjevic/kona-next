/** @format */

import React from "react";
import Card from "../Card/Card";
import data from "./data-SR.json";
import styles from "./Cards.module.scss";

function Cards() {
  return (
    <div className={styles.cards}>
      {data.map((card, index) => (
        <Card
          key={index}
          gradient={(index % 3) + 1}
          icon1={card.icon1}
          icon2={card.icon2}
          title={card.title}
          text={card.text}
          bullets={card.bullets}
          link={card.linkTo}
        />
      ))}
    </div>
  );
}

export default Cards;
