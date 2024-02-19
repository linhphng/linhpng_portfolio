import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Linh Nguyen
      </a>
      <div className={styles.menu}>
        <div className={styles.menuBtn}>
          <Hamburger size={48} toggled={menuOpen} toggle={setMenuOpen} />
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li>
            <a href="#projects">Projects</a>
          </li> */}
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={getImageUrl("resume.pdf")} download="Resume.pdf">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
