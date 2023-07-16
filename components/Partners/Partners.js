/** @format */

import Image from "next/image";
import data from "./data-SR.json";
import styles from "./Partners.module.scss";

export default function Partners() {
  const renderLogo = (logo, index) => (
    <Image
      key={index}
      src={logo.path.x2}
      width={439}
      height={135}
      alt={logo.name}
    />
  );

  return (
    <div className={styles.partners}>
      <Image
        className={styles.partners__waves}
        src={"/assets/imgs/waves/waves-partners-1728px.svg"}
        width={1728}
        height={818}
        alt="waves"
      />
      <div className={styles.partners__box}>
        <div className={styles.partners__line}>
          <div className={styles["partners__line--1"]}>
            {data.map(renderLogo)}
          </div>
          <div className={styles["partners__line--1"]}>
            {data.map(renderLogo)}
          </div>
        </div>

        <div className={styles.partners__line}>
          <div className={styles["partners__line--2"]}>
            {data.map(renderLogo)}
          </div>
          <div className={styles["partners__line--2"]}>
            {data.map(renderLogo)}
          </div>
        </div>
      </div>
    </div>
  );
}
