import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../OrganizersStyles/eventsSection.module.scss";

const events = [
  {
    name: "Sound Of Christmas 2023",
    date: { month: "DEC", day: "02" },
    venue: "Bal Gandharva Rang Mandir, Mumbai",
    time: "6:30 PM - 9:30 PM",
    price: "INR 499",
    attendees: 16,
    image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner1.jpg",
  },
  {
    name: "Global Engineering Education Expo 2023",
    date: { month: "DEC", day: "03" },
    venue: "The St. Regis, Mumbai",
    time: "10 AM - 2 PM",
    price: "FREE",
    attendees: 48,
    image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner2.jpg",
  },
  {
    name: "The Road to Jobs and Internships",
    date: { month: "JAN", day: "13" },
    venue: "Online",
    time: "6 PM - 7:30 PM",
    price: "INR 49",
    attendees: 21,
    image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner3.jpg",
  },
  {
    name: "Tech Talk 2024",
    date: { month: "JAN", day: "20" },
    venue: "Online",
    time: "7 PM - 8:30 PM",
    price: "INR 99",
    attendees: 30,
    image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg",
  },
];

const EventsSection: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (eventId: string) => {
    // Navigate to the event detail page with the eventId as a query parameter
    router.push(`/users/nestedpages/organisers-event?eventId=${eventId}`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Events</h2>
      <ul className={styles.eventsList}>
        {events.map((event, index) => (
          <li
            key={index}
            className={styles.eventCard}
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => handleCardClick(index.toString())} // Passing index as eventId
          >
            <div className={styles.overlay}></div>
            <div className={styles.eventDetails}>
              <h3 className={styles.eventName}>{event.name}</h3>
              <p className={styles.venue}>{event.venue}</p>
              <p className={styles.time}>{event.time}</p>
              <p className={styles.price}>{event.price}</p>
              <p className={styles.attendees}>{event.attendees} interested</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsSection;
