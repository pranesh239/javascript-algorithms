/* 
PROBLEM:
-------

Write a function that should chunk the given array into new array with specified size.

(Eg.)
arrayChunk([1,2,3,4,5,6] , 2) => [[1,2],[3,4],[5,6]]
arrayChunk([1,2,3,4,5,6] , 4) => [[1,2,3,4],[5,6]]


SOLUTION:
--------
1.MAKING USE OF CLASSIC 'while' LOOP IN JS 
======
2.MAKING USE OF 'for...of' LOOP IN JS
*/

// => Solution 1

// function arrayChunk(arr, size) {
//   const chunkedArray = [];
//   let index = 0;

//   while (index < arr.length) {
//     chunkedArray.push(arr.slice(index, index + size));
//     index = index + size;
//   }
//   console.log(chunkedArray);

//   return chunkedArray;
// }

// => Solution 2

function arrayChunk(arr, size) {
  const chunkedArray = [];

  for (let el of arr) {
    let last = chunkedArray[chunkedArray.length - 1];
    if (!last || last.length === size) {
      chunkedArray.push([el]);
    } else {
      chunkedArray[chunkedArray.length - 1].push(el);
    }
  }

  return chunkedArray;
}

module.exports = arrayChunk;
