const weave = require("./weave");
const Queue = require("./Queue");

it("should perform have added arrays from two queues alternativelty", () => {
  const q1 = new Queue();
  q1.add(1);
  q1.add(3);
  q1.add(5);
  const q2 = new Queue();
  q2.add(2);
  q2.add(4);

  const weavedQueue = weave(q1, q2);

  expect(weavedQueue.remove()).toBe(1);
  expect(weavedQueue.remove()).toBe(2);
  expect(weavedQueue.remove()).toBe(3);
  expect(weavedQueue.remove()).toBe(4);
  expect(weavedQueue.remove()).toBe(5);
});
