import React, { useState } from "react";
import styles from "./styles/Style3.module.scss";

interface Step3Props {
  data: Record<string, any>;
  onDataChange: (data: any) => void;
}

const Step3: React.FC<Step3Props> = ({ data = {}, onDataChange }) => {
  const [eventType, setEventType] = useState(data.eventType || ""); // Default to empty or previously selected type

  const handleEventTypeSelection = (type: string) => {
    setEventType(type);
    if (type === "Free Event") {
      onDataChange({ ...data, eventType: type, ticketName: "", ticketPrice: "" });
    }
    else if(type === "Ticketed Event") {
      onDataChange({ ...data, eventType: type, ticketName: "", ticketPrice: "" });
    }
  };
  console.log(data)

  const handleInputChange = (field: string, value: string) => {
    onDataChange({ ...data, [field]: value });
  };

  return (
    <div className={styles.step3Container}>
      {/* Heading for Event Type */}
      <h2 className={styles.heading}>What Type Of Event Are You Running?</h2>
      
      {/* Event Type Buttons */}
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.eventTypeButton} ${eventType === "Ticketed Event" ? styles.selected : ""}`}
          onClick={() => handleEventTypeSelection("Ticketed Event")}
        >
          <div>🎟️ Ticketed Event</div>
          <small>My event requires tickets for entry</small>
        </button>
        <button
          type="button"
          className={`${styles.eventTypeButton} ${eventType === "Free Event" ? styles.selected : ""}`}
          onClick={() => handleEventTypeSelection("Free Event")}
        >
          <div>🆓 Free Event</div>
          <small>I&apos;m running a free event</small>
        </button>
      </div>

      {/* Conditional Ticket Details */}
      {eventType === "Ticketed Event" && (
        <>
          {/* Heading for Tickets */}
          <h3 className={styles.subheading}>What Tickets Are You Selling?</h3>
          
          {/* Ticket Details */}
          <div className={styles.ticketDetails}>
            {/* Ticket Name */}
            <div className={styles.formGroup}>
              <label htmlFor="ticketName">Ticket Name</label>
              <input className={styles.ticketinput}
                type="text"
                id="ticketName"
                placeholder="Ticket Name e.g. General Admission"
                value={data.ticketName || ""}
                onChange={(e) => handleInputChange("ticketName", e.target.value)}
              />
            </div>
            
            {/* Ticket Price */}
            <div className={styles.formGroup}>
              <label htmlFor="ticketPrice">Ticket Price</label>
              <div className={styles.inputWithSymbol}>
                <span>₹</span>
                <input className={styles.priceinput}
                  type="number"
                  id="ticketPrice"
                  placeholder="0.00"
                  value={data.ticketPrice || ""}
                  onChange={(e) => handleInputChange("ticketPrice", e.target.value)}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Step3;
