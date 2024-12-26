import { FC, useState } from "react";
import {
  FaBook,
  FaVideo,
  FaQuestionCircle,
  FaHeadset,
  FaSearch,
  FaChevronDown,
  FaPlayCircle,
} from "react-icons/fa";
import styles from "./Help.module.scss";

const Help: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const widgetColors = ["#3B82F6", "#22C55E", "#FACC15", "#F87171"];

  // FAQ Data
  const faqs = [
    { question: "How to add a new user?", answer: "Go to 'Users' and click 'Add User'." },
    { question: "How to reset a password?", answer: "Go to 'Settings' > 'Security' > 'Reset Password'." },
    { question: "Where can I track analytics?", answer: "Visit the 'Dashboard' section." },
    { question: "How to generate reports?", answer: "Go to 'Reports' > 'Generate New Report'." },
  ];

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Video Data
  const videos = [
    { title: "Getting Started with Admin Panel", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Managing Users", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
    { title: "Generating Reports", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
    { title: "Advanced Analytics", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
  ];

  return (
    <div className={styles.help__container}>
      {/* Hero Section */}
      <div className={styles.help__hero}>
        <h1>Admin Help Center</h1>
        <p>Find answers, resources, and tutorials to manage the platform.</p>
        <div className={styles.help__searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.help__cards}>
        {[
          { title: "Documentation", description: "Guides and Docs", icon: <FaBook /> },
          { title: "Video Tutorials", description: "Helpful videos", icon: <FaVideo /> },
          { title: "FAQs", description: "Common questions answered", icon: <FaQuestionCircle /> },
          { title: "Contact Support", description: "Get help from us", icon: <FaHeadset /> },
        ].map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={widgetColors[index % widgetColors.length]} // Dynamic color
          />
        ))}
      </div>

      {/* FAQs Section */}
      <div className={styles.help__faqs}>
        <h2>Frequently Asked Questions</h2>
        {filteredFAQs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <div
              className={styles.question}
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              {faq.question}
              <FaChevronDown />
            </div>
            {activeFAQ === index && <div className={styles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>

      {/* Video Tutorials Section */}
      <div className={styles.help__videos}>
        <h2>Video Tutorials</h2>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <iframe src={video.url} title={video.title} allowFullScreen></iframe>
              <p className={styles.videoTitle}>
                <FaPlayCircle className={styles.playIcon} /> {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card: FC<{ title: string; description: string; icon: JSX.Element; color: string }> = ({
  title,
  description,
  icon,
  color,
}) => (
  <div
    className={styles.card}
    style={{
      // Apply dynamic card color
      "--card-color": color,
    } as React.CSSProperties}
  >
    <div className={styles.cardIcon}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Help;
