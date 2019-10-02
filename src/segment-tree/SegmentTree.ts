class SegmentTree {
  private readonly tree: number[];

  private readonly merge: (x: number, y: number) => number;

  public constructor(
    array: number[],
    merge = Math.min // range minimum query
  ) {
    this.tree = array.concat(array);
    this.merge = merge;
    this.tree[0] = this.tree.length / 2; // raw length
    for (let i = this.tree[0] - 1; i > 0; i--) {
      this.tree[i] = this.merge(this.tree[2 * i], this.tree[2 * i + 1]);
    }
  }

  public query(left: number, right: number): number {
    left += this.tree[0];
    right += this.tree[0];

    let result = Number.POSITIVE_INFINITY;
    while (left < right) {
      if (left % 2 === 1) {
        result = this.merge(result, this.tree[left]);
        left++;
      }
      if (right % 2 === 0) {
        result = this.merge(result, this.tree[right]);
        right--;
      }
      left >>= 1;
      right >>= 1;
    }
    return result;
  }

  public update(i: number, value: number): void {
    i += this.tree[0];
    this.tree[i] = value;

    while (i > 1) {
      i >>= 1;
      this.tree[i] = this.merge(this.tree[2 * i], this.tree[2 * i + 1]);
    }
  }
}

export default SegmentTree;
