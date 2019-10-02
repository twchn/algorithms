import TreeNode from '../TreeNode';
import deserialize from './deserialize';

test('deserialize a binary tree', () => {
  const tree = [5, 2, 3, null, null, 6];
  const root = new TreeNode(5);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  expect(deserialize(tree)).toEqual(root);
});
