import React from "react";
import { Separator } from "../Shared/Separator/Separator";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section
      id="skills"
      className={styles.container}
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <label>
        <Separator section={"Skills"} />
      </label>
      <div className={styles.text}>
        <p>Technologies that I have used are below!</p>
        <p>
          To be continue since I'm working on new skills and update myself with
          new tools everyday.
        </p>
      </div>
      <div className={styles.content}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.type}>
              <h2 className={styles.typeName}>{skill.type}</h2>
              <ul className={styles.skills}>
                {skill.list.map((ele, id) => {
                  return (
                    <li key={id} className={styles.skill}>
                      <img
                        src={getImageUrl(ele.imageSrc)}
                        alt={ele.title}
                      ></img>
                      <p>{ele.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
