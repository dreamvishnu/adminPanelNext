import React from "react";
import styles from "../OrganizersStyles/toggleSection.module.scss";

const ToggleSection: React.FC = () => {
  const toggles = [
    { label: "Ticketing" },
    { label: "Withdrawal" },
    { label: "Hold Account" },
    { label: "Calendar Access" },
    { label: "Chat Feature" },
    { label: "Add Collaborators" },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Actions</h2>
      <div className={styles.toggles}>
        {/* First Row */}
        <div className={styles.row}>
          <div className={styles.toggle}>
            <span>{toggles[0].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.toggle}>
            <span>{toggles[1].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.toggle}>
            <span>{toggles[2].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>

        {/* Second Row */}
        <div className={styles.row}>
          <div className={styles.toggle}>
            <span>{toggles[3].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.toggle}>
            <span>{toggles[4].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.toggle}>
            <span>{toggles[5].label}</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToggleSection;
