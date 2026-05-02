import { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  function handleGuests(e) {
    const value = e.target.value;
    const numericValue = value === "" ? 1 : Number(value);
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setGuests(numericValue);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    props.onDateChange(newDate);
  }

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.bookingForm}
        onSubmit={handleSubmit}
        aria-labelledby="form-title"
      >
        <h2 id="form-title">Book your table now!</h2>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          onChange={handleDateChange}
          value={date}
          aria-required="true"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          aria-required="true"
        >
          <option value="">--Choose time--</option>
          {props.availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests (Between 1 and 10)</label>
        <input
          type="number"
          min={1}
          max={10}
          id="guests"
          name="guests"
          onChange={handleGuests}
          value={guests}
          aria-required="true"
          aria-describedby="guests-desc"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          value={occasion}
          aria-required="true"
        >
          <option value="">--Choose occasion--</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button
          type="submit"
          disabled={!date || !time || !occasion}
          aria-disabled={!date || !time || !occasion}
        >
          Make your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
