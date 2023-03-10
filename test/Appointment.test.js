import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment, AppointmentsDayView } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the client first name", () => {
    const client = { firstName: "Ashley" };
    const component = <Appointment client={client} />;

    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });
  it("renders the client first name", () => {
    const client = { firstName: "Jimbo" };
    const component = <Appointment client={client} />;

    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Jimbo");
  });
});

describe("AppointmentsDayView", () => {
  let container;
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      client: { firstName: "Jonas" },
    },
    {
      startsAt: today.setHours(13, 0),
      client: { firstName: "Karl" },
    },
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) => {
    act(() => ReactDOM.createRoot(container).render(component));
  };

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);

    const listElement = document.querySelector("ol");

    expect(listElement).not.toBeNull();
  });

  it("renders an li element for each appointment", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    const listItems = document.querySelectorAll("ol > li");
    expect(listItems).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    const listItems = document.querySelectorAll("li");

    expect(listItems[0].textContent).toEqual("12:00");

    expect(listItems[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today."
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(document.body.textContent).toContain("Jonas");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    const buttons = document.querySelectorAll("li > button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0].type).toEqual("button");
  });
});


