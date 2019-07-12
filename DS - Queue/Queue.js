/*
Implementation of Queue Data structure
*/

// function Queue() {
//   this.queueArray = [];
//   this.add = function(value) {
//     this.queueArray.unshift(value);
//   };
//   this.remove = function() {
//     return this.queueArray.pop();
//   };

// }

class Queue {
  constructor() {
    this.queueArray = [];
  }

  add(value) {
    this.queueArray.unshift(value);
  }

  remove() {
    return this.queueArray.pop();
  }

  peek() {
    return this.queueArray[this.queueArray.length - 1];
  }
}

// let queue = new Queue();
// queue.add(1);
// console.log(queue.remove());

module.exports = Queue;
