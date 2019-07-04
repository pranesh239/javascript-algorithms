const fibonacci = require("./index");

it("should return the nth element in the Fibonacci series", () => {
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(10)).toBe(55);
  expect(fibonacci(16)).toBe(987);
});
