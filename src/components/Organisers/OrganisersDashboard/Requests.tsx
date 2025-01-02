import { FC, useState } from "react";
import styles from "./Organisers.module.css";
import Request from "@/components/UsersComponent/OrganisersComponent/Requests/Request";


const PreviousEvents: FC = () => {


  return (
    <div className={styles.container}>
        <Request />
    </div>
  );
};

export default PreviousEvents;
