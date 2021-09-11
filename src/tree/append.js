import traverse from './traverse';

const appendNode = (parentNode, node) => {
  const { id, type, value } = parentNode;

  if (!value) {
    return { id, type, value: node };
  }

  if (Array.isArray(value)) {
    return { id, type, value: value.concat([node]) };
  }

  return { id, type, value: [value, node] };
};

const append = (tree, target, node) => {
  return traverse(tree, (current) => {
    const { id } = current;

    if (id === target) {
      return appendNode(current, node);
    }

    return current;
  });
};

export default append;