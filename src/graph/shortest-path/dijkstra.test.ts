import WeightedGraph from '../WeightedGraph';
import dijkstra from './dijkstra';

test('dijkstra shortest paths algorithm', () => {
  const graph = new WeightedGraph([
    [0, 1, 5],
    [0, 2, 12],
    [0, 3, 7],
    [1, 3, 1],
    [3, 2, 4]
  ]);

  const dis = dijkstra(graph, 0);

  expect(dis.get(0)).toBe(0);
  expect(dis.get(1)).toBe(5);
  expect(dis.get(2)).toBe(10);
  expect(dis.get(3)).toBe(6);
});
