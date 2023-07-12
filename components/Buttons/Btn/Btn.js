/** @format */

import React from "react";
import styles from "./Btn.module.scss";

function Btn({ children }) {
  return <button className={styles.btn}>{children}&rarr;</button>;
}

export default Btn;
