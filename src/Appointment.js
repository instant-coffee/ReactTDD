import React from "react";
export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;

export const AppointmentDayView = ({ appointments }) => (
  <div id="appointmentsDayView" />
);
