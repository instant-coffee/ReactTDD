const timeToHours = (time) => {
  const [hours, minutes] = new Date(time).toTimeString().split(":");
  return `${hours}:${minutes}`;
};

export { timeToHours };
