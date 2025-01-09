import React from "react";
import styles from "./styles/EventDetails.module.scss";

interface EventDetailsProps {
  data: string; // Event data as a JSON string
  onDataChange: (data: string) => void; // Callback for updating event data
}

const EventDetails: React.FC<EventDetailsProps> = ({ data, onDataChange }) => {
  // Parse the data safely with a fallback to an empty object
  console.log(data)
  let eventData = {};
  try {
    eventData = JSON.parse(data);
  } catch (error) {
    console.error("Invalid JSON data passed to EventDetails:", error);
    eventData = {
      name: "Unknown Event",
      eventType: "N/A",
      price: "N/A",
      date: "N/A",
      startTime: "N/A",
      endTime: "N/A",
      venueLocation: "N/A",
      mapImage: "",
      organizerImage: "",
      organizerName: "Unknown Organizer",
      speakerImage: "",
      speakerName: "Unknown Speaker",
      sponsorImage: "",
      sponsorName: "Unknown Sponsor",
      venueImage: "",
      venueName: "Unknown Venue",
      foodImage: "",
      foodName: "Unknown Food",
      description: "No description available.",
    };
  }

  return (
    <div className={styles.container}>
      {/* Card 1: Banner and Basic Info */}
      <div className={styles.card}>
        <img
          src={(eventData as any).bannerImage || ""}
          alt="Event Banner"
          className={styles.bannerImage}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.eventName}>{(eventData as any).name}</h2>
          <p className={styles.eventType}>Event Type: {(eventData as any).eventType}</p>
          <p className={styles.price}>Price: {(eventData as any).price}</p>
          <h3 className={styles.sectionHeading}>Date and Time</h3>
          <div className={styles.datetime}>
            <i className={`fas fa-calendar ${styles.icon}`} />
            <span>{(eventData as any).date}</span>
          </div>
          <div className={styles.datetime}>
            <i className={`fas fa-clock ${styles.icon}`} />
            <span>
              {(eventData as any).startTime} - {(eventData as any).endTime}
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Venue */}
      <div className={styles.card}>
        <h3 className={styles.sectionHeading}>Venue</h3>
        <div className={styles.location}>
          <i className={`fas fa-map-marker-alt ${styles.icon}`} />
          <p>{(eventData as any).venueLocation}</p>
        </div>
        <img
          src={(eventData as any).mapImage || "https://t4.ftcdn.net/jpg/03/38/37/73/360_F_338377354_1Y6oyGrvaae2kqY3YS07b6X4NDKZntne.jpg"}
          alt="Venue Map"
          className={styles.mapImage}
        />
      </div>

      {/* Card 3: Organizer, Speaker, Sponsor */}
      <div className={styles.card}>
        <h3 className={styles.sectionHeading}>Organizer</h3>
        <div className={styles.inlineInfo}>
          <img
            src={(eventData as any).organizerImage || ""}
            alt="Organizer"
            className={styles.profileImage}
          />
          <span className={styles.inlineText}>{(eventData as any).organizerName}</span>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h3 className={styles.sectionHeading}>Speaker</h3>
            <div className={styles.inlineInfo}>
              <img
                src={(eventData as any).speakerImage || ""}
                alt="Speaker"
                className={styles.profileImage}
              />
              <span className={styles.inlineText}>{(eventData as any).speakerName}</span>
            </div>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.sectionHeading}>Sponsor</h3>
            <div className={styles.inlineInfo}>
              <img
                src={(eventData as any).sponsorImage || ""}
                alt="Sponsor"
                className={styles.profileImage}
              />
              <span className={styles.inlineText}>{(eventData as any).sponsorName}</span>
            </div>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.sectionHeading}>Venue</h3>
            <div className={styles.inlineInfo}>
              <img
                src={(eventData as any).venueImage || ""}
                alt="Venue"
                className={styles.profileImage}
              />
              <span className={styles.inlineText}>{(eventData as any).venueName}</span>
            </div>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.sectionHeading}>Food</h3>
            <div className={styles.inlineInfo}>
              <img
                src={(eventData as any).foodImage || ""}
                alt="Food"
                className={styles.profileImage}
              />
              <span className={styles.inlineText}>{(eventData as any).foodName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Event Description */}
      <div className={styles.card}>
        <h3 className={styles.sectionHeading}>Event Description</h3>
        <p className={styles.description}>{(eventData as any).description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
