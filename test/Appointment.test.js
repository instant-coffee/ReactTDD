import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment, AppointmentDayView } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;

    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });
  it("renders the customer first name", () => {
    const customer = { firstName: "Jimbo" };
    const component = <Appointment customer={customer} />;

    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Jimbo");
  });
});

describe("AppointmentDayView", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) => {
    act(() => ReactDOM.createRoot(container).render(component));
  };

  it("renders a div with the right id", () => {
    render(<AppointmentDayView appointments={[]} />);

    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });
});