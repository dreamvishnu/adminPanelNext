import React from "react";
import styles from "../OrganizersStyles/toggleSection.module.scss";

interface Props {
  toggles: boolean[];
  updateToggle: (index: number, value: boolean) => void;
}

const ToggleSection: React.FC<Props> = ({ toggles, updateToggle }) => {
  const labels = [
    "Ticketing",
    "Withdrawal",
    "Hold Account",
    "Calendar Access",
    "Chat Feature",
    "Add Collaborators",
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Actions</h2>
      <div className={styles.toggles}>
        {[0, 1, 2].map((index) => (
          <div className={styles.row} key={index}>
            {labels.slice(index * 3, (index + 1) * 3).map((label, i) => {
              const toggleIndex = index * 3 + i;
              return (
                <div className={styles.toggle} key={toggleIndex}>
                  <span>{label}</span>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={toggles[toggleIndex]}
                      onChange={(e) => updateToggle(toggleIndex, e.target.checked)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToggleSection;
