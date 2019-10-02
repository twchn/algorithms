class UnionFind {
  private readonly parent: number[];

  private readonly rank: number[]; // not the depth

  private count: number;

  public constructor(count: number) {
    this.count = count;
    this.rank = new Array(count).fill(0);
    this.parent = Array.from({ length: count }).map((_, i) => i);
  }

  public find(x: number): number {
    while (x !== this.parent[x]) {
      this.parent[x] = this.parent[this.parent[x]]; // path compression by halving
      // this.parent[x] = this.find(this.parent[x]); // path compression by recursion
      x = this.parent[x];
    }
    return x;
  }

  public isConnected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  public unite(x: number, y: number): void {
    x = this.find(x);
    y = this.find(y);
    if (x === y) return;

    if (this.rank[x] < this.rank[y]) {
      this.parent[x] = y;
    } else if (this.rank[x] > this.rank[y]) {
      this.parent[y] = x;
    } else {
      this.parent[x] = y;
      this.rank[y]++;
    }
  }
}

export default UnionFind;
