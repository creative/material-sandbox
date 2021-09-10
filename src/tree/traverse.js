const traverse = (node, match, callback) => {
  const { id, type } = node;

  if (match(id)) {
    return callback(node);
  }

  switch (type) {
    case 'node':
      return node;
    case 'element':
      return node;
    default:
      return node;
  }
};



export default traverse;
