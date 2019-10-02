import TreeNode from '../TreeNode';
import serialize from './serialize';

test('serialize a binary tree', () => {
  const root = new TreeNode(6);
  root.left = new TreeNode(3);
  root.right = new TreeNode(2);
  root.left.right = new TreeNode(4);
  expect(serialize(root)).toEqual([6, 3, 2, null, 4, null, null, null, null]);
});
