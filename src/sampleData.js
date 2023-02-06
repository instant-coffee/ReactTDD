const today = new Date();
const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: "Ashley" } },
  { startsAt: at(10), customer: { firstName: "Jordan" } },
  { startsAt: at(11), customer: { firstName: "Matt" } },
  { startsAt: at(12), customer: { firstName: "Alex" } },
  { startsAt: at(13), customer: { firstName: "Jimbo" } },
  { startsAt: at(14), customer: { firstName: "Karl" } },
  { startsAt: at(15), customer: { firstName: "Jonas" } },
  { startsAt: at(16), customer: { firstName: "Sally" } },
  { startsAt: at(17), customer: { firstName: "Sue" } },
];
