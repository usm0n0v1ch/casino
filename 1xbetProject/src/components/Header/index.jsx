import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Добро пожаловать в наше Казино!</h1>
      <p>Ощутите азарт и выигрывайте невероятные призы прямо сейчас!</p>
    </header>
  );
};

export default Header;
