import React from "react";
import styles from "./style.module.css";
import Header from "../../components/Header";
import PlayNowButton from "../../UI/PlayNowButton";
import Benefits from "../../components/Benefits";
import DepositForm from "../../components/DepositForm";


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <PlayNowButton />
      <Benefits />
      <DepositForm />
    </div>
  );
};

export default HomePage;
