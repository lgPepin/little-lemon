import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/BookingPage";

test("renders the BookingForm heading", () => {
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  render(<BookingForm availableTimes={mockAvailableTimes} />);
  const headingElement = screen.getByText("Book your table now!");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns initialized times when action type is DATE_CHANGED", () => {
  const currentState = ["12:00", "13:00"];
  const action = { type: "DATE_CHANGED" };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(initializeTimes());
});

test("updateTimes returns the current state for unknown action", () => {
  const currentState = ["12:00", "13:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});
