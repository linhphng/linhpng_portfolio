import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.title} href="/">
        Linh Nguyen
      </a>
      <a className={styles.shortTitle} href="/">
        LN
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
            <a href="#about">About</a>
          </li>
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
