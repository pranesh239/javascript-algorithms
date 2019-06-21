/*
PROBLEM:
-------

Write a function that should accept a string and return the reverse of that string


SOLUTIONS:
---------

1. FAIRLY A SIMPLE SOLUTION BY UTILISING ARRAY FEATURES
Array split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Array reverse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
======
2. MAKING USE OF 'for...of' LOOP
for...of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
======
3. MAKING USE OF 'split' AND 'reduce' FROM ARRAY
ARRAY reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
======
*/

// => Solution 1

// function stringReversal(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// => Solution 2

// function stringReversal(str) {
//   let rev = "";

//   for (let char of str) {
//     rev = char + rev;
//   }

//   return rev;
// }

// => Solution 3

function stringReversal(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = stringReversal;
