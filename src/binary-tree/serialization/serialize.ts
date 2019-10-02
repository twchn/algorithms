import TreeNode from '../TreeNode';

function serialize<T>(root: TreeNode<T>): (T | null)[] {
  const result = [];
  const queue: (TreeNode<T> | null)[] = [root];
  for (const node of queue) {
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  return result;
}

export default serialize;
