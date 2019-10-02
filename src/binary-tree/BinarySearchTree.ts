import TreeNode from './TreeNode';
import deserialize from './serialization/deserialize';

class BinarySearchTree<T> {
  public root: TreeNode<T> | null;

  public constructor(data: T[]) {
    this.root = deserialize(data);
  }

  public insert(x: T): void {
    this.insertNode(this.root, x);
  }

  private insertNode(node: TreeNode<T> | null, x: T): TreeNode<T> {
    if (node != null) {
      if (x < node.val) {
        node.left = this.insertNode(node.left, x);
      } else if (x > node.val) {
        node.right = this.insertNode(node.right, x);
      }
      return node;
    }
    this.root = new TreeNode<T>(x);
    return this.root;
  }

  public find(x: T): boolean {
    return this.findNode(this.root, x);
  }

  private findNode(node: TreeNode<T> | null, x: T): boolean {
    if (node == null) return false;
    if (x < node.val) return this.findNode(node.left, x);
    if (x > node.val) return this.findNode(node.right, x);
    return true;
  }

  public remove(x: T): void {
    this.removeNode(this.root, x);
  }

  private removeNode(node: TreeNode<T> | null, x: T): TreeNode<T> | null {
    if (node == null) return null;
    if (x < node.val) {
      node.left = this.removeNode(node.left, x);
    } else if (x > node.val) {
      node.right = this.removeNode(node.right, x);
    } else {
      if (node.left == null) return node.right;
      if (node.right == null) return node.left;
      let p = node.left;
      while (p.right) p = p.right;
      node.val = p.val;
      node.left = this.removeNode(node.left, p.val);
    }
    return node;
  }
}

export default BinarySearchTree;
