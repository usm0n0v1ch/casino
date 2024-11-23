import React, { useState } from "react";
import styles from "./style.module.css";

const DepositForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    alert(`Пополнение на сумму ${amount} через ${paymentMethod}`);
  };

  return (
    <form className={styles.depositForm} onSubmit={handleDeposit}>
      <h2>Пополнить счет</h2>
      <div>
        <label>Сумма:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите сумму"
          required
        />
      </div>
      <div>
        <label>Способ оплаты:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Выберите способ</option>
          <option value="card">Банковская карта</option>
          <option value="e-wallet">Электронный кошелек</option>
        </select>
      </div>
      <button type="submit">Пополнить счет</button>
    </form>
  );
};

export default DepositForm;
