const { Node } = require("./binaryTree");

describe("BinarySearchTree", () => {
  let n1;
  beforeEach(() => {
    n1 = new Node(5);
  });
  it("should insert the data to the given Binary search tree(BST) at correct position", () => {
    n1.insert(3);
    expect(n1.left.data).toBe(3);
    expect(n1.right).toBeNull();
    n1.insert(8);
    expect(n1.right.data).toBe(8);
  });
  it("should insert the data to the given Binary search tree(BST) at correct position", () => {
    expect(n1.contains(5)).toEqual(n1);
    expect(n1.contains(2)).toBeNull();
  });
});
