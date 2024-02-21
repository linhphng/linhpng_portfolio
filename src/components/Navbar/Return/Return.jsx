import React, { useState, useEffect } from "react";
import styles from "./Return.module.css";
import { getImageUrl } from "../../../utils";

export const Return = () => {
  const [returnTop, setReturnTop] = useState(false);

  const handleButton = () => {
    setReturnTop(window.scrollY > 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleButton);

    return () => {
      window.removeEventListener("scroll", handleButton);
    };
  }, []);

  const [buttonPosition, setButtonPosition] = useState({
    bottom: "5%",
  });

  const handleButtonClick = () => {
    setButtonPosition({ bottom: "50vw" });
    setTimeout(() => {
      setButtonPosition({ bottom: "5%" });
    }, 1000);
  };

  const handleClick = () => {
    handleButtonClick();
    scrollToTop();
  };

  return (
    <div
      className={`${returnTop ? styles.button : styles.hidden}`}
      onClick={handleClick}
      style={buttonPosition}
    >
      <img src={getImageUrl("navbar/bees.png")}></img>
    </div>
  );
};
