import { FC } from "react";
import data from "@/data/data.json";
import styles from "./Topics.module.css";

const Topics: FC = () => {
  return (
    <div className={styles.topics}>
      <h3>Strongest Topics</h3>
      {data.topics.map((topic, index) => (
        <div key={index} className={styles.topic}>
          <span
            className={styles.icon}
            style={{
              background: topic.color, // Dynamically set background color
            }}
          >
            <img
              src={`/assets/${topic.icon || "default-icon"}.png`}
              alt={topic.title}
              className={styles.iconImage}
            />
          </span>
          <div className={styles.details}>
            <span>{topic.title}</span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width: `${topic.percentage}%`,
                }}
              >
                <div className={styles.progressBubble}>{topic.percentage}%</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
