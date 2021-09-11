
import append from './append';
import replace from './replace';

const modify = (action, tree, target, value) => {
  switch (action) {
    case 'APPEND':
      return append(tree, target, value);
    case 'REPLACE':
      return replace(tree, target, value);
    default:
      return tree;
  }
};

export default modify;