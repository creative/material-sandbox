import traverse from './traverse';

const replace = (tree, target, node) => {
  console.log('replace');
  return traverse(tree, (current) => {
    const { id } = current;
    const { type, value } = node;

    if (id === target) {
      return { id, type, value };
    }

    return current;
  });
};

export default replace;