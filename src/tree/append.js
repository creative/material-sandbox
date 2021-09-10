const append = (value) => {
  return (node) => {
    const newNode = { ...value, parent: node.id };

    if (!node.value) {
      return { ...node, value: newNode };
    }

    if (Array.isArray(node.value)) {
      return { ...node, value: [newNode].concat(node.value) }
    }

    return { ...node, value: [node.value, newNode] }
  };
};

export default append;