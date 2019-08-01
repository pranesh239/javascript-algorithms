/*
Implementation of LinkedList data structure.
*/

class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (!this.head) return 0;
    let length = 0;
    let currentNode = this.head;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let lastNode = this.head;

    while (lastNode) {
      if (lastNode.next === null) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;

    if (this.size === 1) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let previous = this.head;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (this.size === 1) {
      this.head.next = new Node(data);
      return;
    }

    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = new Node(data);
        return;
      }
      currentNode = currentNode.next;
    }
  }

  getAt(index) {
    if (this.size() < 0) return null;

    if (index >= this.size()) return null;

    if (index === 0) return this.head;

    let counter = 1;
    let currentNode = this.head.next;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }

  removeAt(index) {
    if (this.size() < 0) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) {
      return null;
    }
    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    const nodeToInsert = new Node(data);

    if (index === 0) {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    nodeToInsert.next = previousNode.next;
    previousNode.next = nodeToInsert;
  }

  clear() {
    this.head = null;
  }

  forEach(fn) {
    let counter = 0;

    let currentNode = this.head;

    while (currentNode) {
      fn(currentNode, counter);
      currentNode = currentNode.next;
      counter++;
    }
  }

  getMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  isCircular() {
    let p1 = this.head;
    let p2 = this.head;

    while (p2.next && p2.next.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      if (p1 === p2) {
        return true;
      }
    }

    return false;
  }

  fromLast(n) {
    let p1 = this.head;
    let p2 = this.head;
    let counter = n;

    while (counter > 0) {
      p2 = p2.next;
      counter--;
    }

    while (p2.next !== null) {
      p2 = p2.next;
      p1 = p1.next;
    }

    return p1;
  }

  reverseList() {
    let prev = null;
    let current = this.head;
    let next;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
