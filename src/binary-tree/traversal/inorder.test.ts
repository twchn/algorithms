import deserialize from '../serialization/deserialize';
import { inorderRecurive, inorderIterative } from './inorder';

test('test recursive inorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(inorderRecurive(tree)).toEqual([4, 5, 1, 3]);
});

test('test iterative inorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(inorderIterative(tree)).toEqual([4, 5, 1, 3]);
});
