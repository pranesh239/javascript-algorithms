const anagram = require("./index");

it("should return whether the given two strings contains same letters with same count", () => {
  expect(anagram("car", "arc")).toBeTruthy();
  expect(anagram("Astronomer!", "Moon starer")).toBeTruthy();
  expect(anagram("Eleven plus two", "Twelve plus one")).toBeTruthy();
  expect(anagram("India", "America")).toBeFalsy();
});
