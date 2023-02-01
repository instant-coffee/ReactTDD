import { timeToHours } from "../src/helpers";

describe("timeToHours", () => {
  it("returns the hours and minutes of a time", () => {
    const today = new Date();
    const time = today.setHours(13, 0);
    expect(timeToHours(time)).toEqual("13:00");
  });
});
