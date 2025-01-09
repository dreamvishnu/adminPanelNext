import React from "react";
import styles from "./requestCard.module.scss";

interface RequestCardProps {
  name: string;
  type: string;
  image: string;
  onAccept: () => void;
  onReject: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ name, type, image, onAccept, onReject }) => {
  return (
    <div className={styles.card}>
      <div className={styles.innerFlex}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img src={image} alt={`${name} profile`} />
        </div>

        {/* Details Section */}
        <div className={styles.detailsFlex}>
          <p>
            <strong>{name}</strong> sent you a <strong>{type}</strong> request
          </p>
        </div>

        {/* Buttons Section */}
        <div className={styles.buttonsFlex}>
          <button className={styles.acceptButton} onClick={onAccept}>
            Accept
          </button>
          <button className={styles.rejectButton} onClick={onReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
