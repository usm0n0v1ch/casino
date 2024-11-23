import React from "react";
import styles from "./style.module.css";

const Benefits = () => {
  const benefits = [
    "Щедрые бонусы на первый депозит!",
    "Ежедневные акции для постоянных игроков.",
    "Огромный выбор игр на любой вкус.",
  ];

  return (
    <section className={styles.benefits}>
      <h2>Наши преимущества</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
