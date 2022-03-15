import Heap from '../../heap/Heap';
import WeightedGraph from '../WeightedGraph';

function dijkstra(graph: WeightedGraph, source: number): Map<number, number> {
  const pq = new Heap([], (x: number[], y: number[]): number => x[0] - y[0]); // min heap

  pq.push([0, source]);

  const distance = new Map<number, number>();
  distance.set(source, 0);

  while (pq.size > 0) {
    const [dis, node] = pq.pop();

    if ((distance.get(node) ?? Infinity) < dis) continue;

    for (const [next, weight] of graph.adj(node)) {
      const newDis = weight + (distance.get(node) ?? Infinity);
      if (newDis < (distance.get(next) ?? Infinity)) {
        distance.set(next, newDis);
        pq.push([newDis, next]);
      }
    }
  }

  return distance;
}

export default dijkstra;
