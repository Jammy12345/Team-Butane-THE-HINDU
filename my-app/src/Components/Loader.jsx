import React from "react";
import styles from "../Styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};
export default Loader;
