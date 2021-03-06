
import append from './append';
import replace from './replace';
import update from './update';

const modify = (action, tree, target, value) => {
  switch (action) {
    case 'APPEND':
      return append(tree, target, value);
    case 'REPLACE':
      return replace(tree, target, value);
    case 'UPDATE':
      return update(tree, target, value);
    default:
      return tree;
  }
};

export default modify;