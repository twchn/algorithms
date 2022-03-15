class WeightedGraph {
  private graph = new Map<number, [number, number][]>();

  constructor(edges: [number, number, number][]) {
    for (const [u, v, w] of edges) {
      const adj = this.graph.get(u) ?? [];
      adj.push([v, w]);
      this.graph.set(u, adj);
    }
  }

  public adj(n: number) {
    return this.graph.get(n) ?? [];
  }
}

export default WeightedGraph;
