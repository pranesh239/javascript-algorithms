/*
Implementation of Tree data structure.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  traverseBreadthFirst(fn) {
    let currentNode = [this.root];

    while (currentNode.length) {
      const currentEl = currentNode.shift();
      currentNode.push(...currentEl.children);
      fn(currentEl);
    }
  }

  traverseDepthFirst(fn) {
    let currentNode = [this.root];

    while (currentNode.length) {
      const currentEl = currentNode.unshift();
      currentNode.push(...currentEl.children);
      fn(currentEl);
    }
  }
}

exports.Tree = Tree;
exports.Node = Node;
