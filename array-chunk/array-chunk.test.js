const arrayChunk = require("./index");

it("should return the chunked array of specific size from the given array", () => {
  expect(arrayChunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  expect(arrayChunk([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]]);
});
