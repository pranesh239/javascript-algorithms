const maxChars = require("./index");

it("should return the maximum character in the string", () => {
  expect(maxChars("apple")).toBe("p");
  expect(maxChars("1100111111322")).toBe("1");
});
