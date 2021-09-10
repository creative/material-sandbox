import { v4 as uuid } from 'uuid';
import plugins from '../plugins';

const propValue = (property, parent) => {
  const { defaultValue, initialValue } = property;

  if (initialValue) {
    return initialValue;
  }

  if (defaultValue) {
    return defaultValue;
  }

  return null;
}

const defaultProps = (config, id) => {
  const { props } = config;

  const properties = {};
  Object.keys(props || {}).forEach((property) => {
    const { type } = props[property];
    const value = propValue(props[property]);

    properties[property] = { id: uuid(), parent: id, type, value };
  });

  return properties;
}

const create = (type, id) => {
  const config = plugins[type];

  if (!config) {
    throw Error(`No plugin found for ${type}`);
  }

  return {
    id: id || uuid(),
    type: 'element',
    value: {
      type,
      props: defaultProps(config)
    }
  }
};

export default create;