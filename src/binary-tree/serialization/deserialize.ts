import TreeNode from '../TreeNode';

function deserialize<T>(data: T[]): TreeNode<T> | null {
  if (data.length === 1 && !data[0]) return null;
  const root = new TreeNode(data[0]);
  let front = 0;
  let index = 1;
  const queue = [root];
  while (index < data.length) {
    const node = queue[front++];
    const left = data[index++];
    if (left) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    if (index >= data.length) break;
    const right = data[index++];
    if (right) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
}

export default deserialize;
