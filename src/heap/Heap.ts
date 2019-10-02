class Heap<T> {
  private readonly heap: T[];

  public size = 0;

  private readonly compare: (x: T, y: T) => number;

  public constructor(array: T[], comparator: (x: T, y: T) => number) {
    this.heap = array;
    this.size = array.length;
    this.compare = comparator;
    let i = Math.floor((this.size - 1) / 2);
    while (i >= 0) {
      this.heapify(i--);
    }
  }

  private heapify(index: number): void {
    if (index >= this.size) return;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let cur = index;
    if (left < this.size && this.compare(this.heap[left], this.heap[cur]) < 0) {
      cur = left;
    }
    if (
      right < this.size &&
      this.compare(this.heap[right], this.heap[cur]) < 0
    ) {
      cur = right;
    }
    if (cur !== index) {
      [this.heap[index], this.heap[cur]] = [this.heap[cur], this.heap[index]];
      this.heapify(cur);
    }
  }

  public push(x: T): void {
    let i = this.size++;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[parent], x) <= 0) break;
      this.heap[i] = this.heap[parent];
      i = parent;
    }
    this.heap[i] = x;
  }

  public pop(): T {
    const result = this.heap[0];
    const x = this.heap[--this.size];
    let i = 0;
    while (2 * i + 1 < this.size) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let cur = left;
      if (
        right < this.size &&
        this.compare(this.heap[right], this.heap[left]) < 0
      ) {
        cur = right;
      }
      if (this.compare(this.heap[cur], x) >= 0) break;
      this.heap[i] = this.heap[cur];
      i = cur;
    }
    this.heap[i] = x;
    return result;
  }
}

export default Heap;
