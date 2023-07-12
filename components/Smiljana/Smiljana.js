/** @format */

import React from "react";
import Image from "next/image";

import styles from "./Smiljana.module.scss";

function Smiljana() {
  return (
    <div>
      <Image
        src={"/assets/imgs/smiljana/smiljanaSimic-2x.png"}
        alt="Smiljana Simic"
        width={597}
        height={767}
      />
    </div>
  );
}

export default Smiljana;
