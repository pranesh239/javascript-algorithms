/*
PROBLEM:
-------

Write a function that should take two Queue objects as inputs and return a new Queue object which has items alternatively from the provided Queue objects.

(Eg.)
const q1 = new Queue();
  q1.add(1);
  q1.add(3);
  q1.add(5);
  const q2 = new Queue();
  q2.add(2);
  q2.add(4);

  const weavedQueue = weave(q1, q2);

  weavedQueue.remove() => 1
  weavedQueue.remove() => 2
  weavedQueue.remove() => 3
  weavedQueue.remove() => 4
  weavedQueue.remove() => 5
*/

const Queue = require("./Queue");

function weave(q1, q2) {
  const q3 = new Queue();

  while (q1.peek() !== undefined || q2.peek() !== undefined) {
    if (q1.peek() !== undefined) q3.add(q1.remove());
    if (q2.peek() !== undefined) q3.add(q2.remove());
  }

  return q3;
}

module.exports = weave;
