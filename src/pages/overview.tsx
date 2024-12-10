// import { useState } from "react";
// import { PanelContent } from "@/components";

// export default function Overview() {
//   const [activeTab, setActiveTab] = useState<"overview" | "help">("overview");

//   return (
//     <PanelContent headerContent title="Overview">
//       <div className="slider">
//         <button
//           className={`tab ${activeTab === "overview" ? "active" : ""}`}
//           onClick={() => setActiveTab("overview")}
//         >
//           Overview
//         </button>
//         <button
//           className={`tab ${activeTab === "help" ? "active" : ""}`}
//           onClick={() => setActiveTab("help")}
//         >
//           Help
//         </button>
//       </div>

//       {activeTab === "overview" && (
//         <div className="content">
//           <div className="stats">
//             <div className="stat-item">Profits: ₹10,00,567.99</div>
//             <div className="stat-item">Total Revenue: ₹2,80,068.99</div>
//             <div className="stat-item">Total Events: 156k</div>
//             <div className="stat-item">Total Communities: 3,422</div>
//           </div>

//           <div className="charts">
//             <div className="chart">Activity Chart</div>
//             <div className="chart">User Category</div>
//             <div className="chart">Top Areas</div>
//           </div>

//           <div className="topics">
//             <div className="topic">Technology: 95%</div>
//             <div className="topic">Art & Culture: 92%</div>
//             <div className="topic">Business & Networking: 89%</div>
//             <div className="topic">Education: 58%</div>
//           </div>

//           <div className="leaderboard">
//             <div className="leader">Jesse Thomas ★★★★☆</div>
//             <div className="leader">Thisal Mathiyazhagan ★★★☆☆</div>
//             <div className="leader">Helen Chuang ★★★★☆</div>
//             <div className="leader">Lura Silverman ★★★★☆</div>
//             <div className="leader">Winfred Groton ★★★☆☆</div>
//           </div>
//         </div>
//       )}

//       {activeTab === "help" && (
//         <div className="content">
//           <h1>Help Section</h1>
//           <p>Information and assistance content goes here.</p>
//         </div>
//       )}
//     </PanelContent>
//   );
// }