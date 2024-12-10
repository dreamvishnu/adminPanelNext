import React, { useState } from "react";
import styles from "../OrganizersStyles/organisersList.module.scss";
import { FaStar } from "react-icons/fa";

const organisers = [
  { name: "Aman Ahuja", rating: 4.0, events: 15, communities: 10, emoji: "👨‍💼" },
  { name: "Sofia Singh", rating: 4.5, events: 12, communities: 14, emoji: "👩‍💼" },
  { name: "Ravi Sharma", rating: 4.3, events: 20, communities: 8, emoji: "👨‍💼" },
];

const OrganisersList: React.FC = () => {
  const [selectedOrganiser, setSelectedOrganiser] = useState(organisers[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelectOrganiser = (organiser: typeof organisers[0]) => {
    setSelectedOrganiser(organiser);
    setIsDropdownOpen(false);
  };

  const renderStars = (rating: number) => {
    const stars = Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < Math.floor(rating) ? styles.filledStar : styles.emptyStar}
        />
      ));
    return stars;
  };

  return (
    <section className={styles.container}>
      {/* Main Organizer Tab */}
      <div
        className={styles.dropdownTab}
        onClick={toggleDropdown}
        data-open={isDropdownOpen}
      >
        <span className={styles.emoji}>{selectedOrganiser.emoji}</span>
        <span className={styles.name}>{selectedOrganiser.name}</span>
        <span className={styles.stars}>{renderStars(selectedOrganiser.rating)}</span>
        <span className={styles.events}>{selectedOrganiser.events} Events</span>
        <span className={styles.communities}>{selectedOrganiser.communities} Communities</span>
        <span className={styles.arrow}>{isDropdownOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown List */}
      <div
        className={`${styles.dropdownList} ${
          isDropdownOpen ? styles.dropdownOpen : styles.dropdownClosed
        }`}
      >
        {organisers.map((organiser, index) => (
          <div
            key={index}
            className={styles.listItem}
            onClick={() => handleSelectOrganiser(organiser)}
          >
            <span className={styles.emoji}>{selectedOrganiser.emoji}</span>
            <span className={styles.name}>{organiser.name}</span>
            <span className={styles.stars}>{renderStars(organiser.rating)}</span>
            <span className={styles.events}>{organiser.events} Events</span>
            <span className={styles.communities}>{organiser.communities} Communities</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganisersList;
