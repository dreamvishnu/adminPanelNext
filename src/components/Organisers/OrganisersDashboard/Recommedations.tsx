import { FC, useState } from "react";
import styles from "./Organisers.module.css";
import Recommendation from "@/components/UsersComponent/OrganisersComponent/Recommendations/Recommendation";

const Recommendations: FC = () => {


  return (
    <div className={styles.container}>
        <Recommendation/>
    </div>
  );
};

export default Recommendations;
