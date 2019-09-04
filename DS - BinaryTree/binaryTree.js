/* Binary tree implementation */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data) {
      if (this.left === null) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    } else if (data > this.data) {
      if (this.right === null) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  contains(data) {
    if (this.data === data) return this;

    if (data < this.data && this.left !== null) {
      return this.left.contains(data);
    } else if (data > this.data && this.right !== null) {
      return this.right.contains(data);
    }

    return null;
  }
}

exports.Node = Node;
