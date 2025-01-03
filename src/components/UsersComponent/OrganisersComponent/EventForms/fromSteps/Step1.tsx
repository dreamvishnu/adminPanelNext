import React from "react";
import styles from "./styles/Step1.module.scss";

interface Step1Props {
  data: Record<string, any>;
  onDataChange: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Step1: React.FC<Step1Props> = ({ data, onDataChange, onNext, onPrevious }) => {
  const handleChange = (field: string, value: string) => {
    onDataChange({ ...data, [field]: value });
  };

  return (
    <div className={styles.step1Container}>
      <h2 className={styles.heading}>Event Details</h2>
      <form className={styles.form}>
        {/* Event Name */}
        <div className={styles.formGroup}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            value={data.eventName}
            onChange={(e) => handleChange("eventName", e.target.value)}
            placeholder="Enter the name of your event"
          />
        </div>

        {/* Event Category */}
        <div className={styles.formGroup}>
          <label htmlFor="eventCategory">Event Category</label>
          <select
            id="eventCategory"
            value={data.eventCategory}
            onChange={(e) => handleChange("eventCategory", e.target.value)}
          >
            <option value="">Select event category</option>
            <option value="AI">AI</option>
            <option value="Startups">Startups</option>
            <option value="Docker">Docker</option>
          </select>
        </div>

        {/* Event Type */}
        <div className={styles.formGroup}>
          <label>Event Type</label>
          <div className={styles.checkboxGroup}>
            {["Physical", "Virtual", "Hybrid"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="eventType"
                  value={type}
                  checked={data.eventType === type}
                  onChange={(e) => handleChange("eventType", e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <h3 className={styles.subheading}>Date and Time</h3>
        <div className={styles.dateTime}>
          <div className={styles.formGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={data.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              value={data.startTime}
              onChange={(e) => handleChange("startTime", e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              value={data.endTime}
              onChange={(e) => handleChange("endTime", e.target.value)}
            />
          </div>
        </div>

        {/* Location */}
        <h3 className={styles.subheading}>Location</h3>
        <div className={styles.formGroup}>
          <label htmlFor="location">Venue Location</label>
          <input
            type="text"
            id="location"
            value={data.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Enter event location"
          />
        </div>

        {/* Event Description */}
        <h3 className={styles.subheading}>Event Description</h3>
        <div className={styles.formGroup}>
          <textarea
            id="description"
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Enter details about your event"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Step1;
