import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getItem, PanelContent } from "@/components";
import Overview from "@/components/overview/Overview";
import Help from "@/components/help/Help";
import { Box } from "@mui/material";
import styles from "./AdminDashboard.module.css";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "help">("overview");
  const router = useRouter();

  useEffect(() => {
    // Get user data from local storage
    const userData = getItem("userdata");

    // Debugging logs for development
    console.log("User Data:", userData);

    // Check if token is valid
    if (userData?.token !== 12341212) {
      console.log("Invalid token, redirecting to admin login...");
      router.push("/userlogin"); // Redirect to admin login
    }
  }, [router]);

  return (
    <PanelContent headerContent>
      {/* Tab Navigation */}
      <Box className="scrollableContent">
        <Box className={styles.tabContainer}>
          <div
            className={`${styles.tab} ${activeTab === "overview" ? styles.active : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </div>
          <div
            className={`${styles.tab} ${activeTab === "help" ? styles.active : ""}`}
            onClick={() => setActiveTab("help")}
          >
            Help
          </div>
          <div
            className={styles.indicator}
            style={{
              transform: `translateX(${activeTab === "overview" ? "0%" : "100%"})`,
            }}
          />
        </Box>

        {/* Tab Content */}
        <Box>
          {activeTab === "overview" && <Overview />}
          {activeTab === "help" && <Help />}
        </Box>
      </Box>
    </PanelContent>
  );
};

export default UserDashboard;
