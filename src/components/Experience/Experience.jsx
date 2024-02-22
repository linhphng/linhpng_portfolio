import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import { Separator } from "../Shared/Separator/Separator";

export const Experience = () => {
  return (
    <section
      className={styles.container}
      id="experience"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <label>
        <Separator section={"Experience"} />
      </label>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <a
                  href={historyItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={historyItem.organisation}
                  ></img>
                </a>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}> {experience} </li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
