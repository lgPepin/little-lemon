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
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

test("updateTimes returns initialized times when action type is DATE_CHANGED", () => {
  const currentState = ["12:00", "13:00"];
  const action = { type: "DATE_CHANGED", date: "2026-05-10" };
  const newState = updateTimes(currentState, action);
  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);
});

test("updateTimes returns the current state for unknown action", () => {
  const currentState = ["12:00", "13:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});

test("can submit the form when all required fields are filled", () => {
  const mockOnDateChange = jest.fn();
  const mockOnSubmit = jest.fn();
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
      onSubmit={mockOnSubmit}
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

test("guests input has correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={[]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const guestsInput = screen.getByLabelText(/Number of guests/);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("aria-required", "true");
});

test("date input has correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={[]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("aria-required", "true");
  expect(dateInput).toHaveAttribute("id", "res-date");
  expect(dateInput).toHaveAttribute("name", "res-date");
});

test("time select has correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={["18:00"]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toHaveAttribute("aria-required", "true");
  expect(timeSelect).toHaveAttribute("id", "res-time");
  expect(timeSelect).toHaveAttribute("name", "res-time");
});

test("occasion select has correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={["18:00"]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveAttribute("aria-required", "true");
  expect(occasionSelect).toHaveAttribute("id", "occasion");
  expect(occasionSelect).toHaveAttribute("name", "occasion");
});

test("submit button is disabled when form is invalid", () => {
  render(
    <BookingForm
      availableTimes={["18:00"]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const submitButton = screen.getByText("Make your reservation");
  expect(submitButton).toBeDisabled();
});

test("guests input ignores values outside 1-10 range", () => {
  render(
    <BookingForm
      availableTimes={[]}
      onDateChange={jest.fn()}
      onSubmit={jest.fn()}
    />,
  );
  const guestsInput = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsInput, { target: { value: "15" } });
  expect(guestsInput.value).toBe("1"); // la valeur ne change pas
});
