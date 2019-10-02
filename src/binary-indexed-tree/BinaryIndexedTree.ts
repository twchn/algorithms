class BinaryIndexedTree {
  private readonly bit: number[];

  public constructor(array: number[]) {
    this.bit = [array.length].concat(array);
    for (let i = 1; i < this.bit.length; i++) {
      const j = i + BinaryIndexedTree.lowBit(i);
      if (j < this.bit.length) {
        this.bit[j] += this.bit[i];
      }
    }
  }

  public update(i: number, add: number): void {
    i++;
    while (i < this.bit.length) {
      this.bit[i] += add;
      i += BinaryIndexedTree.lowBit(i);
    }
  }

  public query(left: number, right: number): number {
    let result = 0;
    right++;
    while (right > 0) {
      result += this.bit[right];
      right -= BinaryIndexedTree.lowBit(right);
    }
    while (left > 0) {
      result -= this.bit[left];
      left -= BinaryIndexedTree.lowBit(left);
    }
    return result;
  }

  private static lowBit(x: number): number {
    return x & -x;
  }
}

export default BinaryIndexedTree;
