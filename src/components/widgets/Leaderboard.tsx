import { FC } from "react";
import data from "@/data/data.json";
import styles from "./Leaderboard.module.css";

const Leaderboard: FC = () => {
  return (
    <div className={styles.leaderboard}>
      <h3 className={styles.title}>User Leaderboard</h3>
      {data.leaderboard.map((user, index) => (
        <div key={index} className={styles.user}>
          <div className={styles.avatarContainer}>
            <img
              src={`/assets${user.image || "default-icon"}.jpg`}
              alt={user.name}
              className={styles.avatar}
            />
          </div>
          <div className={styles.details}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.rating}>
              {"★".repeat(user.rating)}
              <span className={styles.ratingCount}>({user.rating})</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
