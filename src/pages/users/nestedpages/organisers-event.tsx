import React from "react";
import { PanelContent } from "@/components"; // Assuming PanelContent is your global layout
import styles from "./OrganisersEvent.module.scss"; // Custom styles

const OrganisersEvent: React.FC = () => {
  const handleExportCSV = () => {
    const rows = [
      ["Name", "Email ID", "Phone Number"],
      ...Array.from({ length: 10 }).map((_, index) => [
        `Attendee ${index + 1}`,
        `attendee${index + 1}@example.com`,
        `+91-987654321${index}`,
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendees.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PanelContent headerContent title="">
      <div className={styles.mainContainer}>
        {/* Left Column */}
        <div className={styles.pageContainer}>
          {/* Event Card */}
          <div className={styles.eventCard}>
            <div className={styles.banner}>
              <img
                src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                alt="Event Banner"
                className={styles.bannerImage}
              />
              <div className={styles.profileImageWrapper}>
                <img
                  src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                  alt="Organizer"
                  className={styles.profileImage}
                />
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.eventDetails}>
                <h2 className={styles.eventName}>STARTUP TALKS</h2>
                <h4 className={styles.sectionHeading}>Description</h4>
                <p className={styles.date}>
                  This event aims in bringing some brilliant minds behind the
                  greatest startups India has recently seen.
                </p>
                <h4 className={styles.sectionHeading}>Date & Time</h4>
                <p className={styles.date}>Saturday, 2 December 2024</p>
                <p className={styles.time}>6:30 PM - 9:30 PM</p>
                <h4 className={styles.sectionHeading}>Venue</h4>
                <p className={styles.venue}>
                  Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road & Patwardhan Park, Off Linking Road, Bandra West, Mumbai, India
                </p>
              </div>
              <div className={styles.organizerInfo}>
                <h3 className={styles.organizerName}>Sakshi Kumari</h3>
                <button className={styles.viewButton}>View</button>
              </div>
            </div>
          </div>

          {/* Grid Card */}
          <div className={styles.detailsGridCard}>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <h4 className={styles.gridHeading}>Speaker</h4>
                <div className={styles.inlineDetails}>
                  <img
                    src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                    alt="Speaker"
                    className={styles.inlineImage}
                  />
                  <div>
                    <p className={styles.inlineName}>Amit Nikhade</p>
                    <button className={styles.inlineButton}>View</button>
                  </div>
                </div>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridHeading}>Sponsor</h4>
                <div className={styles.inlineDetails}>
                  <img
                    src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                    alt="Sponsor"
                    className={styles.inlineImage}
                  />
                  <div>
                    <p className={styles.inlineName}>IntelliCredence</p>
                    <button className={styles.inlineButton}>View</button>
                  </div>
                </div>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridHeading}>Venue</h4>
                <div className={styles.inlineDetails}>
                  <img
                    src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                    alt="Venue"
                    className={styles.inlineImage}
                  />
                  <div>
                    <p className={styles.inlineName}>RK Towers</p>
                    <button className={styles.inlineButton}>View</button>
                  </div>
                </div>
              </div>
              <div className={styles.gridItem}>
                <h4 className={styles.gridHeading}>Caterer</h4>
                <div className={styles.inlineDetails}>
                  <img
                    src="https://res.cloudinary.com/dg7ovb7da/image/upload/w_500,h_300,c_fill/myprivate/banner4.jpg"
                    alt="Caterer"
                    className={styles.inlineImage}
                  />
                  <div>
                    <p className={styles.inlineName}>Amrit Cafe</p>
                    <button className={styles.inlineButton}>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.tableContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 className={styles.sectionHeading}>Attendee List</h4>
            <button className={styles.exportButton} onClick={handleExportCSV}>
              📥
            </button>
          </div>
          <table className={styles.attendeeTable}>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index}>
                  <td>Attendee {index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PanelContent>
  );
};

export default OrganisersEvent;
