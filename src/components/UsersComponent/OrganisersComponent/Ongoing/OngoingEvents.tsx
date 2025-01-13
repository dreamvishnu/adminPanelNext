import React from "react";
import { useRouter } from "next/router";
import styles from "../../AdminStyles/eventsSection.module.scss";
import eventData from "../../../../data/data.json"; // Import the data.json file

const OngoingEvents: React.FC = () => {
  const router = useRouter();

  // Map data.json to the required format
  const events = eventData.events.map((event) => ({
    name: event.Step1.eventName,
    date: {
      month: new Date(event.Step1.startDate).toLocaleString("default", { month: "short" }).toUpperCase(),
      day: new Date(event.Step1.startDate).getDate().toString().padStart(2, "0"),
    },
    venue: event.Step1.location,
    time: `${event.Step1.startTime} - ${event.Step1.endTime}`,
    price: event.Step3.ticketPrice === "0" ? "FREE" : `INR ${event.Step3.ticketPrice}`,
    image: event.Step2.bannerImage,
    fullData: event, // Pass the entire event data
  }));

  const handleCardClick = (event) => {
    // Navigate to the OrganisersEvent page with the entire event data
    router.push({
      pathname: "/users/nestedpages/organisers-event",
      query: { eventData: JSON.stringify(event.fullData) }, // Serialize the data for query
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Events</h2>
      </div>
      <ul className={styles.eventsList}>
        {events.map((event, index) => (
          <li
            key={index}
            className={styles.eventCard}
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => handleCardClick(event)}
          >
            <div className={styles.overlay}></div>
            <div className={styles.eventDetails}>
              <h3 className={styles.eventName}>{event.name}</h3>
              <p className={styles.venue}>{event.venue}</p>
              <p className={styles.time}>{event.time}</p>
              <p className={styles.price}>{event.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OngoingEvents;
