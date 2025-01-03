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

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Previous Events" | "Request" | "Recommendation" | "Create an Events">("Ongoing");
  const router = useRouter();

  useEffect(() => {
    // Get user data from local storage
    const userData = getItem("userdata");

    // Debugging logs for development
    console.log("User Data:", userData);

    // Check if token is valid
    if (userData?.token !== 12341212) {
      console.log("Invalid token, redirecting to user login...");
      router.push("/userlogin"); // Redirect to user login
    }
  }, [router]);

  // Tab data for rendering dynamically
  const tabs = [
    { name: "Ongoing", component: <Ongoing /> },
    { name: "Previous Events", component: <PreviousEvent/> },
    { name: "Request", component: <Request/> },
    { name: "Recommendation", component: <div>Recommendation Content</div> },
    { name: "Create an Events", component: <EventForm /> }, // Updated to include EventForm
  ];

  // Find the active tab index for indicator positioning
  const activeTabIndex = tabs.findIndex((tab) => tab.name === activeTab);

  return (
    <PanelContent headerContent>
      {/* Tab Navigation */}
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
              transform: `translateX(${activeTabIndex * 100}%)`, // Move indicator to the active tab
              width: `${100 / tabs.length}%`, // Adjust width based on the number of tabs
            }}
          />
        </Box>

        {/* Tab Content */}
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
