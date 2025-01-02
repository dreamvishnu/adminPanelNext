import React from "react";
import styles from "../AdminStyles/deleteAccountButton.module.scss";

const DeleteAccountButton: React.FC = () => {
  const handleDelete = () => {
    alert("Are you sure you want to delete your account?");
  };

  return (
    <section className={styles.container}>
      <button onClick={handleDelete} className={styles.button}>
        Delete Account
      </button>
    </section>
  );
};

export default DeleteAccountButton;
