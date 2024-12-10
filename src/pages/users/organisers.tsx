import { PanelContent } from "@/components";
import React from "react";
import OrganisersList from "@/components/UsersComponent/OrganizersComponent/OrganisersList";
import ToggleSection from "@/components/UsersComponent/OrganizersComponent/ToggleSection";
import EarningsSection from "@/components/UsersComponent/OrganizersComponent/EarningsSection";
import EventsSection from "@/components/UsersComponent/OrganizersComponent/EventsSection";
import CommunitiesSection from "@/components/UsersComponent/OrganizersComponent/CommunitiesSection";
import DeleteAccountButton from "@/components/UsersComponent/OrganizersComponent/DeleteAccountButton";

import styles from "./MainStyles/organisersPage.module.scss";

const OrganisersPage: React.FC = () => {
  return (
    <PanelContent headerContent title="">
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Organizer Management</h1>
            <p>Manage your organizers here, in one place.</p>
          </header>
          <main className={styles.main}>
            <OrganisersList />
            <ToggleSection />
            <EarningsSection />
            <EventsSection />
            <CommunitiesSection />
            <DeleteAccountButton />
          </main>
        </div>
      </div>
    </PanelContent>
  );
};

export default OrganisersPage;
