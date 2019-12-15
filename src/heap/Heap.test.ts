import Heap from './Heap';

test('build a max heap', () => {
  const rawArray = [2, 5, 6, 1, 9, 0, 0];
  const maxHeap = new Heap(
    rawArray,
    (x: number, y: number): number => y - x
  );
  const result = [];
  while (maxHeap.size > 0) {
    result.push(maxHeap.pop());
  }
  expect(result).toEqual(rawArray.sort((x, y) => y - x));
});

test('build a min heap', () => {
  const rawArray = [3, 6, 1, 4, 5, 2, 9, 0, 2];
  const minHeap = new Heap(
    rawArray,
    (x: number, y: number): number => x - y
  );
  const result = [];
  while (minHeap.size > 0) {
    result.push(minHeap.pop());
  }
  expect(result).toEqual(rawArray.sort((x, y) => x - y));
});
