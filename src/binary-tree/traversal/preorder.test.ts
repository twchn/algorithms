import deserialize from '../serialization/deserialize';
import { preorderRecurive, preorderIterative } from './preorder';

test('test recursive preorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(preorderRecurive(tree)).toEqual([1, 4, 5, 3]);
});

test('test iterative preorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(preorderIterative(tree)).toEqual([1, 4, 5, 3]);
});
