import React, { useState } from "react";
import styles from "./Recommendation.module.scss";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Request from "./Request";

const events = [
    {
      id: 1,
      name: "Sound Of Christmas 2023",
      date: { month: "DEC", day: "02", full: "2023-12-02" },
      venue: "Bal Gandharva Rang Mandir, Mumbai",
      topic: "Music",
      time: "6:30 PM - 9:30 PM",
      price: "INR 499",
      attendees: 16,
      ratings: 4.5,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner1.jpg",
    },
    {
      id: 2,
      name: "Tech Talk 2024",
      date: { month: "JAN", day: "20", full: "2024-01-20" },
      venue: "Online",
      topic: "Technology",
      time: "7:00 PM - 8:30 PM",
      price: "INR 99",
      attendees: 30,
      ratings: 4.8,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner2.jpg",
    },
    {
      id: 3,
      name: "Global Engineering Education Expo 2023",
      date: { month: "DEC", day: "03", full: "2023-12-03" },
      venue: "The St. Regis, Mumbai",
      topic: "Education",
      time: "10:00 AM - 2:00 PM",
      price: "FREE",
      attendees: 48,
      ratings: 4.2,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner3.jpg",
    },
    {
      id: 4,
      name: "Photography Masterclass",
      date: { month: "APR", day: "05", full: "2024-04-05" },
      venue: "Online",
      topic: "Photography",
      time: "3:00 PM - 5:00 PM",
      price: "INR 199",
      attendees: 35,
      ratings: 4.7,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg",
    },
    {
      id: 5,
      name: "Startup Meetup 2024",
      date: { month: "MAR", day: "10", full: "2024-03-10" },
      venue: "World Trade Center, Bengaluru",
      topic: "Business",
      time: "9:00 AM - 4:00 PM",
      price: "FREE",
      attendees: 120,
      ratings: 4.9,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner1.jpg",
    },
    {
      id: 6,
      name: "Yoga for Stress Relief",
      date: { month: "JUL", day: "01", full: "2024-07-01" },
      venue: "Lodhi Gardens, Delhi",
      topic: "Health",
      time: "6:00 AM - 7:30 AM",
      price: "INR 49",
      attendees: 45,
      ratings: 4.6,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg",
    },
    {
      id: 7,
      name: "Music Fest 2024",
      date: { month: "JUN", day: "15", full: "2024-06-15" },
      venue: "Central Park, NY",
      topic: "Music",
      time: "6:30 PM - 9:30 PM",
      price: "INR 699",
      attendees: 80,
      ratings: 4.8,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner2.jpg",
    },
    {
      id: 8,
      name: "Global Startup Meetup 2024",
      date: { month: "AUG", day: "15", full: "2024-08-15" },
      venue: "Tech Hub, Seattle",
      topic: "Business",
      time: "9:00 AM - 6:00 PM",
      price: "FREE",
      attendees: 130,
      ratings: 4.7,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner3.jpg",
    },
  ];

const Recommendation: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<{ id: number; name: string } | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className={`${styles.container} ${selectedEvent ? styles.slideOut : ""}`}>
      {selectedEvent ? (
        <Request
          eventId={selectedEvent.id}
          eventName={selectedEvent.name}
          onBack={() => setSelectedEvent(null)} // Navigate back
        />
      ) : (
        <>
          <h2 className={styles.title}>Upcoming Events</h2>
          <ul className={styles.eventsList}>
            {events.map((event) => (
              <li
                key={event.id}
                className={styles.eventCard}
                style={{ backgroundImage: `url(${event.image})` }}
                onClick={() => setSelectedEvent({ id: event.id, name: event.name })}
              >
                <IconButton
                  className={styles.bookmark}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(event.id);
                  }}
                >
                  {favorites.includes(event.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
                <div className={styles.overlay}></div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventHeader}>
                    <span className={styles.eventDate}>
                      {event.date.day} {event.date.month} {new Date(event.date.full).getFullYear()}
                    </span>
                    <span className={styles.eventRatings}>⭐ {event.ratings}</span>
                  </div>
                  <h3 className={styles.eventName}>{event.name}</h3>
                  <p className={styles.venue}>{event.venue}</p>
                  <p className={styles.time}>{event.time}</p>
                  <p className={styles.price}>{event.price}</p>
                  <p className={styles.attendees}>{event.attendees} interested</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Recommendation;
