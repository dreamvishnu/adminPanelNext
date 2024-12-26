import { FC, useState } from "react";
import data from "@/data/data.json";
import BarChart from "@/components/widgets/BarChart";
import Topics from "@/components/widgets/Topics";
import Leaderboard from "@/components/widgets/Leaderboard";
import styles from "./Overview.module.css";

const Overview: FC = () => {
  const [filter, setFilter] = useState<string>("Month");

  // Define unique colors for each widget
  const widgetColors = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

  // Map Indian cities to Flaticon paths
  const cityIconMap: Record<string, string> = {
    Goa: "/assets/sunset.png", // Example: Goa's beach icon
    Jaipur: "/assets/jaipur.png", // Example: Jaipur's palace icon
    Delhi: "/assets/ig.png", // Example: Delhi's monument icon
    Mumbai: "/assets/goi.png", // Example: Mumbai's gateway icon
    Kolkata: "/assets/kolkata.png", // Example: Kolkata's bridge icon
    Chennai: "/assets/monument.png", // Example: Chennai's temple icon
    Bangalore: "/assets/bangalore.png", // Example: Bangalore's tech park icon
  };const TopicsIconMap: Record<string, string> = {
    Organizers: "/assets/group.png", // Example: Goa's beach icon
    Speakers: "/assets/speaker.png", // Example: Jaipur's palace icon
    Sponsors: "/assets/deal.png", // Example: Delhi's monument icon
    Attendees: "/assets/attendees.png", // Example: Mumbai's gateway icon
    Venues: "/assets/estate-dealer.png", // Example: Kolkata's bridge icon
    Caterers: "/assets/catereers.png", // Example: Chennai's temple icon
  };

  return (
    <div className={styles.container}>
      {/* Widgets Section */}
      <div className={styles.widgets}>
        {data.widgets.map((widget, index) => (
          <div
            key={index}
            className={styles.widget}
            style={
              {
                "--widget-color": widgetColors[index % widgetColors.length],
              } as React.CSSProperties
            }
          >
            <h3 className={styles.widgetTitle}>{widget.title}</h3>
            <p className={styles.widgetValue}>{widget.value}</p>
            <div className={styles.widgetDivider}></div>
            <p className={styles.widgetDescription}>{widget.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row: Bar Chart and Cards */}
      <div className={styles.row}>
        <div className={styles.barChart}>
          <BarChart filter={filter as "Month" | "Year"} setFilter={setFilter} />
        </div>
        <div className={styles.sideCards}>
          {/* User Category */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>User Category</h3>
            {data.userCategory.map((category, index) => (
              <div key={index} className={styles.cardItem}>
                <span className={`${styles.icon} ${styles.userCategoryIcon}`}>
                  <img
                    src={TopicsIconMap[category.title] ||"/icons/user-icon.png"} // Example User Icon
                    alt={category.title}
                    className={styles.iconImage}
                  />
                </span>
                <span className={styles.title}>{category.title}</span>
                <span className={styles.value}>{category.value}</span>
              </div>
            ))}
          </div>
          {/* Top Areas */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Top Areas</h3>
            {data.topAreas.map((area, index) => (
              <div key={index} className={styles.cardItem}>
                <span className={`${styles.icon} ${styles.topAreaIcon}`} style={{ background: area.color }}>
                  <img
                    src={cityIconMap[area.name] || "/icons/default-icon.png"}
                    alt={area.name}
                    className={styles.iconImage}
                  />
                </span>
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
