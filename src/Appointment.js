import React from "react";
import { timeToHours } from "./helpers";
export const Appointment = ({ client }) => <div>{client.firstName}</div>;

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>
          <button type="button" onClick={() => setSelectedAppointment(i)}>
            {timeToHours(appointment.startsAt)}
          </button>
        </li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>There are no appointments scheduled for today.</p>
    ) : (
      <Appointment {...appointments[0]} />
    )}
  </div>
);
