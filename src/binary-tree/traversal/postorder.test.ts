import deserialize from '../serialization/deserialize';
import { postorderRecurive, postorderIterative } from './postorder';

test('test recursive postorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(postorderRecurive(tree)).toEqual([5, 4, 3, 1]);
});

test('test iterative postorder traversal', () => {
  const tree = deserialize([1, 4, 3, null, 5]);
  expect(postorderIterative(tree)).toEqual([5, 4, 3, 1]);
});
