const intReversal = require("./index");

it("should reverse the passed integer and return it", () => {
  expect(intReversal(43)).toBe(34);
  expect(intReversal(-90)).toBe(-9);
  expect(intReversal(500)).toBe(5);
  expect(intReversal(-21)).toBe(-12);
});
