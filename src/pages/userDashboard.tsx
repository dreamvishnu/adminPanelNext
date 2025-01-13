import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getItem, PanelContent } from "@/components";
import Overview from "@/components/overview/Overview";
import Help from "@/components/help/Help";
import EventForm from "@/components/Organisers/OrganisersDashboard/EventForm"; // Adjust the path if necessary
import { Box } from "@mui/material";
import styles from "./userDashboard.module.css";
import Ongoing from "@/components/Organisers/OrganisersDashboard/Ongoing";
import PreviousEvent from "@/components/UsersComponent/OrganisersComponent/PreviousEvent/PreviousEvent";
import Request from "@/components/UsersComponent/OrganisersComponent/Requests/Request";
import Recommendations from "@/components/Organisers/OrganisersDashboard/Recommedations";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Previous Events" | "Request" | "Recommendation" | "Create an Events">("Ongoing");
  const router = useRouter();

  useEffect(() => {
    const userData = getItem("userdata");

    console.log("User Data:", userData);

    if (userData?.token !== 12341212) {
      console.log("Invalid token, redirecting to user login...");
      router.push("/userlogin");
    }
  }, [router]);

  const tabs = [
    { name: "Ongoing", component: <Ongoing /> },
    { name: "Previous Events", component: <PreviousEvent /> },
    { name: "Request", component: <Request /> },
    { name: "Recommendation", component: <Recommendations /> },
    { name: "Create an Events", component: <EventForm setActiveTab={setActiveTab} /> },
    // Pass setActiveTab
  ];

  const activeTabIndex = tabs.findIndex((tab) => tab.name === activeTab);

  return (
    <PanelContent headerContent>
      <Box className="scrollableContent">
        <Box className={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${styles.tab} ${activeTab === tab.name ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.name as typeof activeTab)}
            >
              {tab.name}
            </div>
          ))}
          <div
            className={styles.indicator}
            style={{
              transform: `translateX(${activeTabIndex * 100}%)`,
              width: `${100 / tabs.length}%`,
            }}
          />
        </Box>

        {/* Render the active tab content */}
        <Box>
          {tabs.map((tab, index) => (
            <div key={index} style={{ display: activeTab === tab.name ? "block" : "none" }}>
              {tab.component}
            </div>
          ))}
        </Box>
      </Box>
    </PanelContent>
  );
};

export default UserDashboard;
