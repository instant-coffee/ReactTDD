import React from "react";
export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;

export const AppointmentDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ul>{appointments.map(appointment) => {
      return(
        <li key={appointment.startsAt}>{appointment.customer.firstName}</li>
      )
    }}</ul>
  </div>
);
