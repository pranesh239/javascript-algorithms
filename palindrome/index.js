/*
PROBLEM:
-------

Write a function that should check whether the passed string is a palindrome or not.

(Eg.)
palindrome('madam') => true
palindrome('ocean') => false

SOLUTIONS:
---------
1. MAKES USE OF ARRAY 'split' METHOD
======
2. THIS SOLUTION WILL BE LITTLE INTERESTING AND NEW. IT MAKES USE OF ARRAY 'every' METHOD.
** every ** A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
Determines whether all the members of an array satisfy the specified test.
Array every: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 
*/

// => Solution 1

// function palindrome(str) {
//   return str === str.split("").reduce((rev, char) => char + rev, "");
// }

// => Solution 2

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
