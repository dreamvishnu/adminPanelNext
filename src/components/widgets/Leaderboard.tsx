import { FC } from "react";
import data from "@/data/data.json";
import styles from "./Leaderboard.module.css";

const Leaderboard: FC = () => {
  return (
    <div className={styles.leaderboard}>
      <h3>User Leaderboard</h3>
      {data.leaderboard.map((user, index) => (
        <div key={index} className={styles.user}>
          <img src={user.image} alt={user.name} className={styles.avatar} />
          <span className={styles.name}>{user.name}</span>
          <span className={styles.rating}>{"★".repeat(user.rating)}</span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
