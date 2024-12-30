import React from "react";
import styles from "../OrganizersStyles/organisersList.module.scss";
import { FaStar } from "react-icons/fa";

interface Organiser {
  name: string;
  rating: number;
  events: number;
  communities: number;
  emoji: string;
}

interface Props {
  organisers: Organiser[];
  selectedOrganiser: Organiser;
  setSelectedOrganiser: (organiser: Organiser) => void;
}

const OrganisersList: React.FC<Props> = ({
  organisers,
  selectedOrganiser,
  setSelectedOrganiser,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const renderStars = (rating: number) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < Math.floor(rating) ? styles.filledStar : styles.emptyStar}
        />
      ));

  return (
    <section className={styles.container}>
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
      <div
        className={`${styles.dropdownList} ${
          isDropdownOpen ? styles.dropdownOpen : styles.dropdownClosed
        }`}
      >
        {organisers.map((organiser, index) => (
          <div
            key={index}
            className={styles.listItem}
            onClick={() => {
              setSelectedOrganiser(organiser);
              setIsDropdownOpen(false);
            }}
          >
            <span className={styles.emoji}>{organiser.emoji}</span>
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
