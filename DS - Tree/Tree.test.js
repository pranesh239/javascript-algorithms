const { Node } = require("./Tree");
const { Tree } = require("./Tree");

describe("Tree", () => {
  let n1;
  beforeEach(() => {
    n1 = new Node(1);
  });

  it("should contain a node with no children", () => {
    expect(n1.data).toBe(1);
    expect(n1.children).toHaveLength(0);
  });

  it("should contain a node with one children", () => {
    n1.add(2);
    expect(n1.children).toHaveLength(1);
  });

  it("should remove a child from tree when remove operation is performed", () => {
    n1.add(2);
    expect(n1.children).toHaveLength(1);
    n1.remove(2);
    expect(n1.children).toHaveLength(0);
  });

  it("should traverse the given tree in Breadth First manner and should execute the given function on every node", () => {
    n1.add(2);
    n1.add(3);
    n1.add(4);
    const t1 = new Tree(n1);
    t1.traverseBreadthFirst(node => {
      node.data = node.data + 10;
    });
    const expectedData = {
      root: {
        data: 11,
        children: [
          { data: 12, children: [] },
          { data: 13, children: [] },
          { data: 14, children: [] }
        ]
      }
    };

    expect(t1).toEqual(expectedData);
  });

  it("should traverse the given tree in Depth First manner and should execute the given function on every node", () => {
    n1.add(2);
    n1.add(3);
    n1.add(4);
    const t1 = new Tree(n1);
    t1.traverseDepthFirst(node => {
      node.data = node.data + 10;
    });
    const expectedData = {
      root: {
        data: 11,
        children: [
          { data: 12, children: [] },
          { data: 13, children: [] },
          { data: 14, children: [] }
        ]
      }
    };

    expect(t1).toEqual(expectedData);
  });
  it("should give the length of the given items in their every levels", () => {
    n1.add(2);
    n1.add(3);
    n1.add(4);
    const t1 = new Tree(n1);
    expect(t1.levelWidth()).toEqual([1, 3]);
  });
});
