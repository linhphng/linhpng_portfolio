import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";
import { Socials } from "../Shared/Socials/Socials";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img
          src={getImageUrl("home/homeImage.png")}
          alt="image of me"
          className={styles.homeImg}
        ></img>
        <div className={styles.text}>
          <h1 className={styles.title}> Hi, I'm Linh</h1>
          <p className={styles.description}>
            I'm an enthusiastic software developer.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <Socials />
      </div>
      {/* <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div> */}
    </section>
  );
};
