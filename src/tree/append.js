import { v4 as uuid } from 'uuid'

const append = (value) => {
  return (node) => {
    const newNode = [{ ...value, id: uuid(), parent: node.id }];

    if (!node.value) {
      return { ...node, value: newNode };
    }

    return { ...node, value: newNode.concat(node.value) }
  };
};

export default append;