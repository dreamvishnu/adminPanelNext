import { useState } from "react";
import { PanelContent } from "@/components";
import Overview from "@/components/overview/Overview";
import Help from "@/components/help/Help";
import { Box } from "@mui/material";
import styles from "./IndexPage.module.css";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "help">("overview");

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

export default IndexPage;
