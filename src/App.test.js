import { render, screen, fireEvent } from "@testing-library/react";
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

test("can submit the form when all required fields are filled", () => {
  const mockOnDateChange = jest.fn();
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      onDateChange={mockOnDateChange}
    />,
  );

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const occasionSelect = screen.getByLabelText("Occasion");
  const submitButton = screen.getByText("Make your reservation");

  fireEvent.change(dateInput, { target: { value: "2026-05-10" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  expect(submitButton).not.toBeDisabled();
  fireEvent.click(submitButton);

  expect(dateInput.value).toBe("");
  expect(timeSelect.value).toBe("");
  expect(guestsInput.value).toBe("1");
  expect(occasionSelect.value).toBe("");
});
