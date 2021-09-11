const travelElement = (node, callback) => {
  const { id, type, value } = node;
  const { props = {} } = value;

  const properties = {};
  Object.keys(props).forEach((prop) => {
    const property = props[prop];
    const traveledProperty = traverse(property, callback);

    if (traveledProperty) {
      properties[prop] = traveledProperty;
    } else {
      properties[prop] = { ...property, value: undefined };
    }
  });

  return callback({ id, type, value: { ...value, props: properties } });
}

const travelNode = (node, callback) => {
  const { id, type, value } = node;

  let traveledValue = null;

  if (Array.isArray(value)) {
    traveledValue = [];

    for (let index = 0; index < value.length; index += 1) {
      const traveledNode = traverse(value[index], callback);

      if (traveledNode) {
        traveledValue.push(traveledNode);
      }
    }
  } else if (value) {
    traveledValue = traverse(value, callback);
  }

  return callback({ id, type, value: traveledValue });
}

const traverse = (node, callback) => {
  const { type } = node;

  switch (type) {
    case 'node':
      return travelNode(node, callback);
    case 'element':
      return travelElement(node, callback);
    default:
      return callback(node);
  }
};



export default traverse;
