const sentenceCapitalize = require("./index");

it("should return every first letter of a word in every given capitalized", () => {
  expect(sentenceCapitalize("it will rain today.")).toBe("It Will Rain Today.");
  expect(sentenceCapitalize("hello all, i am pranesh.")).toBe(
    "Hello All, I Am Pranesh."
  );
});
