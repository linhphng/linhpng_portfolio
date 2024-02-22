import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { Socials } from "../Shared/Socials/Socials";
import styles from "./Contact.module.css";
import { Separator } from "../Shared/Separator/Separator";

export const Contact = () => {
  return (
    <section
      id="contact"
      className={styles.container}
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <label>
        <Separator section={"Contact Me"} />
      </label>
      <div className={styles.text}>
        <p>Feel free to reach out. Looking forward to connect!</p>
        <div className={styles.contacts}>
          <p>
            <FiSmartphone /> (540) 647-0791
          </p>
          <p>
            <a href="mailto:linhlinh1552001@gmail.com">
              <FaEnvelope /> linhlinh1552001@gmail.com
            </a>
          </p>
        </div>
        <Socials />
      </div>
    </section>
  );
};
