import React from "react";
import styles from "../OrganizersStyles/communitiesSection.module.scss";

const communities = [
  { name: "Developers Hub", members: 1200 },
  { name: "Entrepreneurs Network", members: 800 },
  { name: "AI Enthusiasts", members: 1500 },
];

const CommunitiesSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Communities</h2>
      <div className={styles.communitiesGrid}>
        {communities.map((community, index) => (
          <div key={index} className={styles.communityCard}>
            <div className={styles.dateBox}>
              <span className={styles.month}>JAN</span>
              <span className={styles.day}>13</span>
            </div>
            <div className={styles.communityDetails}>
              <h3 className={styles.communityName}>{community.name}</h3>
              <p className={styles.membersCount}>Members: {community.members}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitiesSection;
