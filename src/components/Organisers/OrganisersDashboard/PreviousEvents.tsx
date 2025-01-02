import { FC, useState } from "react";
import styles from "./Organisers.module.css";
import PreviousEvent from "@/components/UsersComponent/OrganisersComponent/PreviousEvent/PreviousEvent";

const PreviousEvents: FC = () => {


  return (
    <div className={styles.container}>
        <PreviousEvent />
    </div>
  );
};

export default PreviousEvents;
