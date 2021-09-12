import traverse from './traverse';

const find = (tree, target) => {
  let targetNode = null;

  // This is inefficient as it travels the entire tree always, but it allows
  // tree traversal algorithm re-use. If performance becomes noticeable this can be optimized.
  traverse(tree, (node) => {
    const { id } = node;

    if (id === target) {
      targetNode = node;
    }

    return node;
  });

  return targetNode;
}

export default find;