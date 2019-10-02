class TreeNode<T> {
  public val: T;

  public left: TreeNode<T> | null;

  public right: TreeNode<T> | null;

  public constructor(val: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default TreeNode;
