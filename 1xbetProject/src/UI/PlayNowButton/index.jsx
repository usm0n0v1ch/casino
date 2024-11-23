import React from "react";
import styles from "./style.module.css";

const PlayNowButton = () => {
  return (
    <div className={styles.playNow}>
      <button className={styles.button}>Играть сейчас!</button>
    </div>
  );
};

export default PlayNowButton;
