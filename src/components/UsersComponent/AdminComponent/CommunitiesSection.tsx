import React from "react";
import styles from "../AdminStyles/communitiesSection.module.scss";

const communities = [
  {
    name: "Developers Hub",
    members: 1200,
    imageUrl: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg",
  },
  {
    name: "Entrepreneurs Network",
    members: 800,
    imageUrl: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner1.jpg",
  },
  {
    name: "AI Enthusiasts",
    members: 1500,
    imageUrl: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner3.jpg",
  },
];

const CommunitiesSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Communities</h2>
      <div className={styles.communitiesGrid}>
        {communities.map((community, index) => (
          <div
            key={index}
            className={styles.communityCard}
            style={{ backgroundImage: `url(${community.imageUrl})` }}
          >
            <div className={styles.overlay}></div>
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
