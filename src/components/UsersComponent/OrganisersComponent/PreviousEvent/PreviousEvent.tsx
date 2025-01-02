import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../AdminStyles/eventsSection.module.scss";
import { Button, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

const events = [
    {
      name: "Sound Of Christmas 2023",
      date: { month: "DEC", day: "02", full: "2023-12-02" },
      venue: "Bal Gandharva Rang Mandir, Mumbai",
      topic: "Music",
      time: "6:30 PM - 9:30 PM",
      price: "INR 499",
      attendees: 16,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner1.jpg",
    },
    {
      name: "Global Engineering Education Expo 2023",
      date: { month: "DEC", day: "03", full: "2023-12-03" },
      venue: "The St. Regis, Mumbai",
      topic: "Education",
      time: "10:00 AM - 2:00 PM",
      price: "FREE",
      attendees: 48,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner2.jpg",
    },
    {
      name: "The Road to Jobs and Internships",
      date: { month: "JAN", day: "13", full: "2024-01-13" },
      venue: "Online",
      topic: "Career",
      time: "6:00 PM - 7:30 PM",
      price: "INR 49",
      attendees: 21,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner3.jpg",
    },
    {
      name: "Tech Talk 2024",
      date: { month: "JAN", day: "20", full: "2024-01-20" },
      venue: "Online",
      topic: "Technology",
      time: "7:00 PM - 8:30 PM",
      price: "INR 99",
      attendees: 30,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg",
    },
    {
      name: "Modern Art Exhibition",
      date: { month: "FEB", day: "05", full: "2024-02-05" },
      venue: "Jehangir Art Gallery, Mumbai",
      topic: "Art",
      time: "10:00 AM - 6:00 PM",
      price: "INR 200",
      attendees: 50,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner5.jpg",
    },
    {
      name: "World Literature Festival",
      date: { month: "FEB", day: "15", full: "2024-02-15" },
      venue: "Habitat Centre, New Delhi",
      topic: "Literature",
      time: "11:00 AM - 5:00 PM",
      price: "INR 150",
      attendees: 75,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner6.jpg",
    },
    {
      name: "Global Startup Meetup 2024",
      date: { month: "MAR", day: "10", full: "2024-03-10" },
      venue: "World Trade Center, Bengaluru",
      topic: "Business",
      time: "9:00 AM - 4:00 PM",
      price: "FREE",
      attendees: 120,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner7.jpg",
    },
    {
      name: "Fitness Bootcamp Challenge",
      date: { month: "MAR", day: "20", full: "2024-03-20" },
      venue: "Juhu Beach, Mumbai",
      topic: "Health",
      time: "6:00 AM - 8:00 AM",
      price: "INR 99",
      attendees: 40,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner8.jpg",
    },
    {
      name: "Photography Masterclass",
      date: { month: "APR", day: "05", full: "2024-04-05" },
      venue: "Online",
      topic: "Photography",
      time: "3:00 PM - 5:00 PM",
      price: "INR 199",
      attendees: 35,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner9.jpg",
    },
    {
      name: "Coding Bootcamp 2024",
      date: { month: "APR", day: "15", full: "2024-04-15" },
      venue: "IIT Delhi",
      topic: "Technology",
      time: "10:00 AM - 5:00 PM",
      price: "INR 999",
      attendees: 60,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner10.jpg",
    },
    {
      name: "AI & ML Summit 2024",
      date: { month: "MAY", day: "01", full: "2024-05-01" },
      venue: "Taj Lands End, Mumbai",
      topic: "Technology",
      time: "9:00 AM - 5:00 PM",
      price: "INR 2499",
      attendees: 150,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner11.jpg",
    },
    {
      name: "Meditation for Beginners",
      date: { month: "MAY", day: "10", full: "2024-05-10" },
      venue: "ISKCON, Bengaluru",
      topic: "Spirituality",
      time: "7:00 AM - 8:30 AM",
      price: "INR 50",
      attendees: 25,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner12.jpg",
    },
    {
      name: "Classical Music Night",
      date: { month: "JUN", day: "15", full: "2024-06-15" },
      venue: "NCPA, Mumbai",
      topic: "Music",
      time: "6:30 PM - 9:30 PM",
      price: "INR 699",
      attendees: 80,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner13.jpg",
    },
    {
      name: "World Environment Day Workshop",
      date: { month: "JUN", day: "05", full: "2024-06-05" },
      venue: "Online",
      topic: "Environment",
      time: "4:00 PM - 6:00 PM",
      price: "FREE",
      attendees: 100,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner14.jpg",
    },
    {
      name: "Yoga for Stress Relief",
      date: { month: "JUL", day: "01", full: "2024-07-01" },
      venue: "Lodhi Gardens, Delhi",
      topic: "Health",
      time: "6:00 AM - 7:30 AM",
      price: "INR 49",
      attendees: 45,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner15.jpg",
    },
    {
      name: "Blockchain Conference 2024",
      date: { month: "JUL", day: "20", full: "2024-07-20" },
      venue: "Le Meridien, Bengaluru",
      topic: "Technology",
      time: "9:00 AM - 6:00 PM",
      price: "INR 2999",
      attendees: 130,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner16.jpg",
    },
    {
      name: "Career Guidance Fair 2024",
      date: { month: "AUG", day: "15", full: "2024-08-15" },
      venue: "Expo Centre, Noida",
      topic: "Career",
      time: "10:00 AM - 5:00 PM",
      price: "FREE",
      attendees: 200,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner17.jpg",
    },
    {
      name: "Dance Workshop by Shiamak",
      date: { month: "AUG", day: "25", full: "2024-08-25" },
      venue: "Shiamak Studio, Mumbai",
      topic: "Dance",
      time: "11:00 AM - 2:00 PM",
      price: "INR 499",
      attendees: 50,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner18.jpg",
    },
    {
      name: "Stand-up Comedy Night",
      date: { month: "SEP", day: "05", full: "2024-09-05" },
      venue: "The Laugh Club, Delhi",
      topic: "Comedy",
      time: "8:00 PM - 10:00 PM",
      price: "INR 599",
      attendees: 90,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner19.jpg",
    },
    {
      name: "Food Festival 2024",
      date: { month: "SEP", day: "25", full: "2024-09-25" },
      venue: "JLN Stadium, Delhi",
      topic: "Food",
      time: "12:00 PM - 8:00 PM",
      price: "FREE",
      attendees: 500,
      image: "https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner20.jpg",
    },
  ];
  

const PreviousEvent: React.FC = () => {
  const router = useRouter();
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);
  const [sortAnchor, setSortAnchor] = useState<null | HTMLElement>(null);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filters, setFilters] = useState({ topic: "", venue: "", month: "" });

  // Extract unique months dynamically from event data
  const uniqueMonths = Array.from(new Set(events.map((event) => event.date.month)));

  const handleCardClick = (eventId: string) => {
    router.push(`/users/nestedpages/organisers-event?eventId=${eventId}`);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchor(event.currentTarget);
  };

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchor(event.currentTarget);
  };

  const applyFilters = () => {
    const filtered = events.filter((event) => {
      const matchesTopic =
        filters.topic === "" || event.topic.toLowerCase().includes(filters.topic.toLowerCase());
      const matchesVenue =
        filters.venue === "" || event.venue.toLowerCase().includes(filters.venue.toLowerCase());
      const matchesMonth = filters.month === "" || event.date.month === filters.month;
      return matchesTopic && matchesVenue && matchesMonth;
    });
    setFilteredEvents(filtered);
    setFilterAnchor(null);
  };

  const sortEvents = (type: string) => {
    let sortedEvents = [...filteredEvents];
    if (type === "az") {
      sortedEvents.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "za") {
      sortedEvents.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "most") {
      sortedEvents.sort((a, b) => b.attendees - a.attendees);
    } else if (type === "least") {
      sortedEvents.sort((a, b) => a.attendees - b.attendees);
    }
    setFilteredEvents(sortedEvents);
    setSortAnchor(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Events</h2>
        <div className={styles.actions}>
          <IconButton onClick={handleFilterClick}>
            <FilterAltIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleSortClick}>
            <SortIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      {/* Filter Menu */}
      <Menu anchorEl={filterAnchor} open={Boolean(filterAnchor)} onClose={() => setFilterAnchor(null)}>
        <div className={styles.filterMenu}>
          <TextField
            label="Topic"
            variant="outlined"
            fullWidth
            value={filters.topic}
            onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
            margin="dense"
          />
          <TextField
            label="Venue"
            variant="outlined"
            fullWidth
            value={filters.venue}
            onChange={(e) => setFilters({ ...filters, venue: e.target.value })}
            margin="dense"
          />
          <TextField
            label="Month"
            variant="outlined"
            select
            fullWidth
            value={filters.month}
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
            margin="dense"
          >
            {uniqueMonths.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={applyFilters} fullWidth>
            Apply Filters
          </Button>
        </div>
      </Menu>

      {/* Sort Menu */}
      <Menu anchorEl={sortAnchor} open={Boolean(sortAnchor)} onClose={() => setSortAnchor(null)}>
        <MenuItem onClick={() => sortEvents("az")}>Sort A-Z</MenuItem>
        <MenuItem onClick={() => sortEvents("za")}>Sort Z-A</MenuItem>
        <MenuItem onClick={() => sortEvents("most")}>Most Interested</MenuItem>
        <MenuItem onClick={() => sortEvents("least")}>Least Interested</MenuItem>
      </Menu>

      {/* Events List */}
      <ul className={styles.eventsList}>
        {filteredEvents.map((event, index) => (
          <li
            key={index}
            className={styles.eventCard}
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => handleCardClick(index.toString())}
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

export default PreviousEvent;
