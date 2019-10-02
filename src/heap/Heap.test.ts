import Heap from './Heap';

test('build a max heap', () => {
  const maxHeap = new Heap(
    [2, 5, 6, 1, 9, 0, 0],
    (x: number, y: number): number => y - x
  );
  const result = [];
  while (maxHeap.size > 0) {
    result.push(maxHeap.pop());
  }
  expect(result).toEqual([9, 6, 5, 2, 1, 0, 0]);
});

test('build a min heap', () => {
  const minHeap = new Heap(
    [3, 6, 1, 4, 5, 2, 9, 0, 2],
    (x: number, y: number): number => x - y
  );
  const result = [];
  while (minHeap.size > 0) {
    result.push(minHeap.pop());
  }
  expect(result).toEqual([0, 1, 2, 2, 3, 4, 5, 6, 9]);
});
