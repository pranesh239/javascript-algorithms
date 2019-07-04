/*
PROBLEM:
-------
Write a function that should return the nth element of the fibonacci series

(Eg.)
fibonacci(5) => 5
fibonacci(10) => 55

SOLUTION:
--------
1. USING SIMPLE FOR LOOP -> time complexity -> O(n) -> Linear
2. USING RECURSION ->  time complexity -> O(2 ^ n) -> Exponential
3. USING MEMOIZE -> time complexity -> O(n) -> Linear

REFERENCES FOR MEMOIZATION:
--------------------------
https://stackoverflow.com/questions/42617249/time-complexity-of-memoization-fibonacci
https://medium.com/@johanna.fulghum/write-the-fibonacci-sequence-in-every-computational-complexity-9adf5ef12775


*/
// => Solution 1

// function fibonacci(n) {
//   if (n < 2) return n;

//   const result = [0, 1];

//   for (let i = 2
//     result.push(result[result.length - 2] + result[result.length - 1]);
//   }

//   return result[n];
// }

// => Solution 2

// function fibonacci(n) {
//   if (n < 2) return n;

//   return fibonacci(n - 2) + fibonacci(n - 1);
// }

// => Solution 3

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];

    cache[n] = fn.call(this, n);
    return cache[n];
  };
}

function fibonacci(n) {
  if (n < 2) return n;

  return mFib(n - 2) + mFib(n - 1);
}

const mFib = memoize(fibonacci);

module.exports = fibonacci;
