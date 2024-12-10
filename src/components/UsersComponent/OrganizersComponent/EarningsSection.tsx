import React, { useState } from "react";
import styles from "../OrganizersStyles/earningsSection.module.scss";

const EarningsSection: React.FC = () => {
  // Hardcoded data for earnings and withdrawals
  const data = {
    yearly: { earnings: "₹2,80,068.99", withdrawals: "₹80,068.99" },
    monthly: {
      January: { earnings: "₹25,000.00", withdrawals: "₹5,000.00" },
      February: { earnings: "₹30,000.00", withdrawals: "₹7,000.00" },
      March: { earnings: "₹20,000.00", withdrawals: "₹3,000.00" },
    },
  };

  // State to manage dropdown selection
  const [selectedPeriod, setSelectedPeriod] = useState("yearly");

  // Values to display based on selection
  const currentData =
    selectedPeriod === "yearly"
      ? data.yearly
      : data.monthly[selectedPeriod as keyof typeof data.monthly];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Earnings & Withdrawals</h2>
        <select
          className={styles.dropdown}
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="yearly">Yearly</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <p className={styles.label}>Earnings</p>
          <p className={`${styles.amount} ${styles.animate}`} key={currentData.earnings}>
            {currentData.earnings}
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Withdrawals</p>
          <p className={`${styles.amount} ${styles.animate}`} key={currentData.withdrawals}>
            {currentData.withdrawals}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
