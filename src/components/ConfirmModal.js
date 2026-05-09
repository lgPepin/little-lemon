import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({
  date,
  time,
  guests,
  occasion,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
      >
        <h3 id="confirm-title">Confirm your reservation</h3>
        <p>
          <span>Date</span> : {date}
        </p>
        <p>
          <span>Time</span> : {time}
        </p>
        <p>
          <span>Guests</span> : {guests}
        </p>
        <p>
          <span>Occasion</span> : {occasion}
        </p>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm}>Confirm</button>
          <button type="button" onClick={onCancel}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
