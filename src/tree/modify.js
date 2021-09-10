
import append from './append';
import match from './match';
import traverse from './traverse';

const modify = (action, tree, target, value) => {
  switch (action) {
    case 'APPEND':
      return traverse(tree, match(target), append(value));
    default:
      return tree;
  }
};

export default modify;