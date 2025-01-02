import React from "react";
import styles from "../AdminStyles/earningsSection.module.scss";

interface Props {
  earnings: string;
  withdrawals: string;
}

const EarningsSection: React.FC<Props> = ({ earnings, withdrawals }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Earnings & Withdrawals</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <p className={styles.label}>Earnings</p>
          <p className={`${styles.amount} ${styles.animate}`} key={earnings}>
            {earnings}
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Withdrawals</p>
          <p className={`${styles.amount} ${styles.animate}`} key={withdrawals}>
            {withdrawals}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
