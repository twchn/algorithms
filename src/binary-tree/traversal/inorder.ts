import TreeNode from '../TreeNode';

function inorderRecurive<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  const inorder = function(node: TreeNode<T> | null): void {
    if (node == null) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  return result;
}

function inorderIterative<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  const stack = [];
  let p = root;
  while (p != null || stack.length > 0) {
    while (p != null) {
      stack.push(p);
      p = p.left;
    }
    if (stack.length > 0) {
      p = stack.pop()!;
      result.push(p.val);
      p = p.right;
    }
  }
  return result;
}

export { inorderRecurive, inorderIterative };
