import { FC } from "react";
import data from "@/data/data.json";
import styles from "./Topics.module.css";

const Topics: FC = () => {
  return (
    <div className={styles.topics}>
      <h3>Strongest Topics</h3>
      {data.topics.map((topic, index) => (
        <div key={index} className={styles.topic}>
          <img src={topic.image} alt={topic.title} className={styles.image} />
          <div className={styles.details}>
            <span>{topic.title}</span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${topic.percentage}%` }}
              ></div>
            </div>
            <span>{topic.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
