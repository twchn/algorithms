import TreeNode from '../TreeNode';

function preorderRecurive<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  const preorder = function(node: TreeNode<T> | null): void {
    if (node == null) return;
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return result;
}

function preorderIterative<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  const stack = [];
  let p = root;
  while (p != null || stack.length > 0) {
    while (p != null) {
      result.push(p.val);
      stack.push(p);
      p = p.left;
    }
    if (stack.length > 0) {
      p = stack.pop()!;
      p = p.right;
    }
  }
  return result;
}

export { preorderRecurive, preorderIterative };
