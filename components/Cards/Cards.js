/** @format */

import React from "react";

import styles from "./Cards.module.scss";

import data from "./data-SR.json";

import Card from "../Card/Card";

function Cards() {
  return (
    <div>
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
