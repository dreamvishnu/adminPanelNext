import { useState } from "react";
import { PanelContent } from "@/components"; // Use this as the parent container
import Overview from "@/components/overview/Overview";
import Help from "@/components/help/Help";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "help">("overview");

  return (
    <PanelContent headerContent title="Dashboard">
      {/* Tab Navigation */}
      <div className="tab-container">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === "help" ? "active" : ""}`}
          onClick={() => setActiveTab("help")}
        >
          Help
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && <Overview />}
        {activeTab === "help" && <Help />}
      </div>
    </PanelContent>
  );
};

export default IndexPage;
