import React from "react";
import { useRouter } from "next/router";
import {PanelContent} from "@/components"; // Assuming PanelContent is your global layout
import styles from "./OrganisersEvent.module.scss"; // Your custom styles

const OrganisersEvent: React.FC = () => {
  return (
    <PanelContent headerContent title="Event Details">
      <div className={styles.pageContainer}>
        <h1> WTF</h1>
        <h1>Hello</h1>
        <p>This is a placeholder page for Organiser Event details.</p>
      </div>
    </PanelContent>
  );
};

export default OrganisersEvent;
