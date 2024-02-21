import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import { Separator } from "../Shared/Separator/Separator";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience" data-aos="zoom-in">
      <label>
        <Separator section={"Experience"} />
      </label>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((histoyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <a
                  href={histoyItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImageUrl(histoyItem.imageSrc)}
                    alt={histoyItem.organisation}
                  ></img>
                </a>
                <div className={styles.historyItemDetails}>
                  <h3>{`${histoyItem.role}, ${histoyItem.organisation}`}</h3>
                  <p>{`${histoyItem.startDate} - ${histoyItem.endDate}`}</p>
                  <ul>
                    {histoyItem.experiences.map((experience, id) => {
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
