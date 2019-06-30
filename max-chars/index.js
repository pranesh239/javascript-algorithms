/*
PROBLEM:
-------

Write a function that should check whether the passed string is a palindrome or not.

(Eg.)
maxChars('apple') => p
maxChars('01110111111 434343') => 1

SOLUTIONS:
---------

1. MAKES USE OF ARRAY 'for...of' AND OBJECT 'for...in' METHOD
Object for...in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
======
2. SAME AS SOLUTION 2 BUT IT AVOIDS IF CONDITION CHECK, AS IT USES 'charList[char] = charList[char] + 1 || 1;'
*/

// => Solution 1

// function maxChars(str) {
//   let charList = {};
//   let maxCharCount = 0;
//   let maxChar;

//   for (let char of str) {
//     if (!charList[char]) {
//       charList[char] = 1;
//     } else {
//       charList[char]++;
//     }
//   }

//   for (let key in charList) {
//     if (charList[key] > maxCharCount) {
//       maxCharCount = charList[key];
//       maxChar = key;
//     }
//   }

//   return maxChar;
// }

// => Solution 2

function maxChars(str) {
  let charList = {};
  let maxCharCount = 0;
  let maxChar;

  for (let char of str) {
    charList[char] = charList[char] + 1 || 1;
  }

  for (let key in charList) {
    if (charList[key] > maxCharCount) {
      maxCharCount = charList[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChars;
