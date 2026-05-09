import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "DATE_CHANGED") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmedBooking");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={(date) => dispatch({ type: "DATE_CHANGED", date })}
        onSubmit={submitForm}
        onClick={handleCancel}
      />
    </>
  );
};

export default BookingPage;
