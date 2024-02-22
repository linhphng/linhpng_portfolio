import React from "react";

import { getImageUrl } from "../../../utils";
import styles from "./Socials.module.css";
import socials from "../../../data/social.json";

export const Socials = () => {
  return (
    <div className={styles.links} data-aos="zoom-in">
      {socials.map((social, id) => {
        return (
          <a
            key={id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <img
                src={getImageUrl(social.imageSrc)}
                alt="social.platform"
              ></img>
            </div>
          </a>
        );
      })}
    </div>
  );
};
