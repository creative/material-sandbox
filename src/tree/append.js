const append = (value) => {
  return (node) => {
    if (!node.value) {
      return { ...node, value };
    }

    if (Array.isArray(node.value)) {
      return { ...node, value: [value].concat(node.value) }
    }

    return { ...node, value: [node.value, value] }
  };
};

export default append;