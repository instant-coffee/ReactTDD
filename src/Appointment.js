import React from "react";
import { timeToHours } from "./helpers";
export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>{timeToHours(appointment.startsAt)}</li>
      ))}
    </ol>
  </div>
);
