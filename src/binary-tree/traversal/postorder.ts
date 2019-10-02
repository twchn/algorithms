import TreeNode from '../TreeNode';

function postorderRecurive<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  const postorder = function(node: TreeNode<T> | null): void {
    if (node == null) return;
    postorder(node.left);
    postorder(node.right);
    result.push(node.val);
  };
  postorder(root);
  return result;
}

function postorderIterative<T>(root: TreeNode<T> | null): T[] {
  if (root == null) return [];
  const result: T[] = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop()!;
    result.unshift(node.val);
    if (node.left != null) {
      stack.push(node.left);
    }
    if (node.right != null) {
      stack.push(node.right);
    }
  }
  return result;
}

export { postorderRecurive, postorderIterative };
