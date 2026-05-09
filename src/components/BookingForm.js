import { useState, useEffect } from "react";
import ConfirmModal from "./ConfirmModal";
import styles from "./BookingForm.module.css";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setIsFormValid(!!(date && time && occasion && guests));
  }, [date, time, occasion, guests]);

  function handleGuests(e) {
    const value = e.target.value;
    if (value === "") {
      setGuests("");
      return;
    }
    const numericValue = Number(value);
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setGuests(numericValue);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowConfirm(true);
  }

  function handleConfirm() {
    const formData = { date, time, guests, occasion };
    props.onSubmit(formData);
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    setShowConfirm(false);
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    props.onDateChange(newDate);
  }

  return (
    <div className={styles.formContainer}>
      {showConfirm && (
        <ConfirmModal
          date={date}
          time={time}
          guests={guests}
          occasion={occasion}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <form
        className={styles.bookingForm}
        onSubmit={handleSubmit}
        aria-labelledby="form-title"
      >
        <h2 id="form-title">Book your table now!</h2>

        <label htmlFor="res-date">Choose date*</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          onChange={handleDateChange}
          value={date}
          aria-required="true"
          aria-describedby="error-message"
        />

        <label htmlFor="res-time">Choose time*</label>
        <select
          id="res-time"
          name="res-time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          aria-required="true"
          aria-describedby="error-message"
        >
          <option value="">--Choose time--</option>
          {props.availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests* (Between 1 and 10)</label>
        <input
          type="number"
          min={1}
          max={10}
          id="guests"
          name="guests"
          onChange={handleGuests}
          value={guests}
          aria-required="true"
          aria-describedby="error-message"
        />

        <label htmlFor="occasion">Occasion*</label>
        <select
          id="occasion"
          name="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          value={occasion}
          aria-required="true"
          aria-describedby="error-message"
        >
          <option value="">--Choose occasion--</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <p
          className={`${styles.messageToAccessValidationButton} ${isFormValid ? styles.hideMessage : ""}`}
          id="error-message"
          aria-live="polite"
        >
          All the fields must be completed to access the validation button
        </p>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={!isFormValid}
            aria-disabled={!isFormValid}
            aria-label="On Click"
          >
            Make your reservation
          </button>
          <button
            type="button"
            aria-label="Cancel reservation and go to home"
            onClick={props.onClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
