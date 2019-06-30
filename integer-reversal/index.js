/* 
PROBLEM:
-------

Write a function that should reverse the given number by retaining its sign.

(Eg.)
intReversal(54) => 45
intReversal(200) => 2
intReversal(-200) => -2

SOLUTION:
--------

MAKING USE OF 'split' AND 'reduce' FROM ARRAY
ARRAY reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Math sign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

*/

function intReversal(int) {
  const reversedNumer = parseInt(
    int
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  return reversedNumer * Math.sign(int);
}

module.exports = intReversal;
