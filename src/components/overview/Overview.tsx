import { FC, useState } from "react";
import data from "@/data/data.json";
import BarChart from "@/components/widgets/BarChart";
import Topics from "@/components/widgets/Topics";
import Leaderboard from "@/components/widgets/Leaderboard";
import styles from "./Overview.module.css";

const Overview: FC = () => {
  const [filter, setFilter] = useState<string>("Month");

  return (
    <div className={styles.container}>
      {/* Widgets Section */}
      <div className={styles.widgets}>
        {data.widgets.map((widget, index) => (
          <div key={index} className={styles.widget}>
            <h3 className={styles.widgetTitle}>{widget.title}</h3>
            <p className={styles.widgetValue}>{widget.value}</p>
          </div>
        ))}
      </div>

      {/* Second Row: Bar Chart and Cards */}
      <div className={styles.row}>
        <div className={styles.barChart}>
          <BarChart  filter={filter as "Month" | "Year"} setFilter={setFilter} />
        </div>
        <div className={styles.sideCards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>User Category</h3>
            {data.userCategory.map((category, index) => (
              <div key={index} className={styles.cardItem}>
                <span className={styles.icon}>{category.icon}</span>
                <span className={styles.title}>{category.title}</span>
                <span className={styles.value}>{category.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Top Areas</h3>
            {data.topAreas.map((area, index) => (
              <div key={index} className={styles.cardItem}>
                <span className={styles.title}>{area.name}</span>
                <span className={styles.value}>{area.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row: Topics and Leaderboard */}
      <div className={styles.row}>
        <div className={styles.topics}>
          <Topics />
        </div>
        <div className={styles.leaderboard}>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
