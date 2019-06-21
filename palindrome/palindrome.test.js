const palindrome = require("./index");

it("should return if the text is a palindrome or not", () => {
  expect(palindrome("madam")).toBeTruthy();
  expect(palindrome("abc")).toBeFalsy();
});
