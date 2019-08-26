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
      const currentEl = currentNode.shift();
      currentNode.unshift(...currentEl.children);
      fn(currentEl);
    }
  }

  levelWidth() {
    let currentNode = [this.root];
    let lengthArray = [];

    while (currentNode.length) {
      lengthArray.push(currentNode.length);

      let temp = [];

      currentNode.forEach(node => {
        temp.push(...node.children);
      });

      currentNode = temp;
    }

    return lengthArray;
  }
}

exports.Tree = Tree;
exports.Node = Node;
