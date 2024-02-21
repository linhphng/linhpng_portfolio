import React from "react";
import styles from "./Separator.module.css";

export const Separator = ({ section }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>{section}</div>
      <div className={styles.separator}> </div>
    </div>
  );
};
