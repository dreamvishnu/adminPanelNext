import React from "react";
import { PanelContent } from "@/components"; // Assuming PanelContent is your global layout
import styles from "./OrganisersEvent.module.scss";

const OrganisersEvent: React.FC = () => {
  // Hardcoded event data
  const eventData = {
    name: "Sample Event",
    eventType: "Conference",
    price: "$50",
    date: "2025-01-15",
    startTime: "10:00 AM",
    endTime: "5:00 PM",
    venueLocation: "123 Event Street, Cityville",
    mapImage: "https://t4.ftcdn.net/jpg/03/38/37/73/360_F_338377354_1Y6oyGrvaae2kqY3YS07b6X4NDKZntne.jpg",
    organizerImage: "https://via.placeholder.com/150",
    organizerName: "John Doe",
    speakerImage: "https://via.placeholder.com/150",
    speakerName: "Dr. Jane Smith",
    sponsorImage: "https://via.placeholder.com/150",
    sponsorName: "Tech Corp",
    venueImage: "https://via.placeholder.com/150",
    venueName: "Event Hall",
    foodImage: "https://via.placeholder.com/150",
    foodName: "Catered Snacks",
    description: "This is a detailed description of the event.",
    bannerImage: "https://via.placeholder.com/600x300",
  };

  const attendeeData = [
    { name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
    { name: "Bob Smith", email: "bob@example.com", phone: "987-654-3210" },
    { name: "Charlie Brown", email: "charlie@example.com", phone: "456-789-0123" },
  ];

  const downloadCSV = () => {
    const csvRows = [
      ["Name", "Email Id", "Phone No."],
      ...attendeeData.map((row) => [row.name, row.email, row.phone]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvRows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "attendee_details.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <PanelContent headerContent={<h1>Event Details</h1>} title="">
      <div className={styles.mainContainer}>
        {/* Left Section: OrganisersEvent Content */}
        <div className={styles.leftSection}>
          <div className={styles.container}>
            {/* Card 1: Banner and Basic Info */}
            <div className={styles.card}>
              <img
                src={eventData.bannerImage || ""}
                alt="Event Banner"
                className={styles.bannerImage}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.eventName}>{eventData.name}</h2>
                <p className={styles.eventType}>
                  Event Type: {eventData.eventType}
                </p>
                <p className={styles.price}>Price: {eventData.price}</p>
                <h3 className={styles.sectionHeading}>Date and Time</h3>
                <div className={styles.datetime}>
                  <i className={`fas fa-calendar ${styles.icon}`} />
                  <span>{eventData.date}</span>
                </div>
                <div className={styles.datetime}>
                  <i className={`fas fa-clock ${styles.icon}`} />
                  <span>
                    {eventData.startTime} - {eventData.endTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Venue */}
            <div className={styles.card}>
              <h3 className={styles.sectionHeading}>Venue</h3>
              <div className={styles.location}>
                <i className={`fas fa-map-marker-alt ${styles.icon}`} />
                <p>{eventData.venueLocation}</p>
              </div>
              <img
                src={eventData.mapImage}
                alt="Venue Map"
                className={styles.mapImage}
              />
            </div>

            {/* Card 3: Organizer, Speaker, Sponsor */}
            <div className={styles.card}>
              <h3 className={styles.sectionHeading}>Organizer</h3>
              <div className={styles.inlineInfo}>
                <img
                  src={eventData.organizerImage}
                  alt="Organizer"
                  className={styles.profileImage}
                />
                <span className={styles.inlineText}>
                  {eventData.organizerName}
                </span>
              </div>

              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <h3 className={styles.sectionHeading}>Speaker</h3>
                  <div className={styles.inlineInfo}>
                    <img
                      src={eventData.speakerImage}
                      alt="Speaker"
                      className={styles.profileImage}
                    />
                    <span className={styles.inlineText}>
                      {eventData.speakerName}
                    </span>
                  </div>
                </div>
                <div className={styles.gridItem}>
                  <h3 className={styles.sectionHeading}>Sponsor</h3>
                  <div className={styles.inlineInfo}>
                    <img
                      src={eventData.sponsorImage}
                      alt="Sponsor"
                      className={styles.profileImage}
                    />
                    <span className={styles.inlineText}>
                      {eventData.sponsorName}
                    </span>
                  </div>
                </div>
                <div className={styles.gridItem}>
                  <h3 className={styles.sectionHeading}>Venue</h3>
                  <div className={styles.inlineInfo}>
                    <img
                      src={eventData.venueImage}
                      alt="Venue"
                      className={styles.profileImage}
                    />
                    <span className={styles.inlineText}>
                      {eventData.venueName}
                    </span>
                  </div>
                </div>
                <div className={styles.gridItem}>
                  <h3 className={styles.sectionHeading}>Food</h3>
                  <div className={styles.inlineInfo}>
                    <img
                      src={eventData.foodImage}
                      alt="Food"
                      className={styles.profileImage}
                    />
                    <span className={styles.inlineText}>
                      {eventData.foodName}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Event Description */}
            <div className={styles.card}>
              <h3 className={styles.sectionHeading}>Event Description</h3>
              <p className={styles.description}>{eventData.description}</p>
            </div>
          </div>
        </div>

        {/* Right Section: Attendee Details */}
        <div className={styles.rightSection}>
          <div className={styles.attendeeTableContainer}>
            <div className={styles.tableHeader}>
              <h3>Attendee Details</h3>
              <button onClick={downloadCSV} className={styles.downloadButton}>
                Download CSV
              </button>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Id</th>
                  <th>Phone No.</th>
                </tr>
              </thead>
              <tbody>
                {attendeeData.map((attendee, index) => (
                  <tr key={index}>
                    <td>{attendee.name}</td>
                    <td>{attendee.email}</td>
                    <td>{attendee.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PanelContent>
  );
};

export default OrganisersEvent;
