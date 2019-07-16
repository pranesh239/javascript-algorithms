const {Node,LinkedList} = require('./linkedList');

describe('LinkedList', () => {
  let list = new LinkedList();

  const n1 = new Node('a');
  const n2 = new Node('b',n1);

  beforeEach(() => {
    list = new LinkedList();
    list.clear();
    list.insertFirst('a');
  });

  it('Linked list should have one node in head and its next should be null', () => {
    expect(list.head.data).toBe('a');
    expect(list.head.next).toBeNull();

    list.insertFirst('b');
    expect(list.head.data).toBe('b');
    expect(list.head.next).toEqual(n1);
  });

  it('should give the size of the given list, when its size property is called', () => {
    list.insertFirst('b');
    list.insertFirst('c');
    expect(list.size()).toBe(3);
  })

  it('should return the first given data of the list, when its getFirst property is called', () => {
    list.insertFirst('b');
    expect(list.getFirst()).toEqual(n2);
  })

  it('should return the last given data of the list, when its getLast property is called', () => {
    expect(list.getLast()).toEqual(n1);
  })

  it('should clear the list, if the clear property is called', () => {
    list.clear();
    expect(list.size()).toBe(0);
  });

  it('should remove the first node in the list if removeFirst property is called',() => {
    list.insertFirst('b');
    list.removeFirst();
    expect(list.getFirst()).toEqual(n1);
  });

  it('should remove the last node in the list if removeLast property is called', () => {
    list.insertFirst('b');
    list.insertFirst('c');
    list.insertFirst('d');
    list.removeLast();
    expect(list.getLast().data).toBe('b');
  });

  it('should insert the given node last to the list if insertLast is called', () => {
    list.insertFirst('b');
    list.insertFirst('c');
    list.insertFirst('d');
    list.insertLast('e');
    expect(list.getLast()).toEqual({data: 'e', next: null});
  });
});

