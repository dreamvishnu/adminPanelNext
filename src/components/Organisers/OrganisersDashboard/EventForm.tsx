import React from "react";
import ProgressBar from "@/components/UsersComponent/OrganisersComponent/EventForms/ProgressBar"; // Adjust the path if necessary
import styles from "../../UsersComponent/OrganisersStyles/EventFormsStyles/EventForm.module.scss"; // Optional: SCSS for EventForm

const EventForm: React.FC = () => {
    const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div className={styles.eventForm}>
      <ProgressBar steps={steps} />
    </div>
  );
};

export default EventForm;
