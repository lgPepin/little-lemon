import BookingForm from "./BookingForm";
import { useReducer } from "react";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  if (action.type === "DATE_CHANGED") return initializeTimes();
  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={(date) => dispatch({ type: "DATE_CHANGED", date })}
      />
    </>
  );
};

export default BookingPage;
