import React from "react";
import { ReactDOM } from "react";
import { Appointment, AppointmentsDayView } from "../src/Appointment";
import { sampleAppointments } from "./sampleData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppointmentsDayView appointments={sampleAppointments} />
);
