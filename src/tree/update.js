import traverse from './traverse';

const update = (tree, target, value) => {
  return traverse(tree, (current) => {
    const { id, type } = current;

    if (id === target) {
      return { id, type, value };
    }

    return current;
  });
};

export default update;