import { v4 as uuidv4 } from 'uuid';
import plugins from '../plugins';

const uuid = () => `ms-${uuidv4()}`;

/**
 * Sets the prop value.
 * @param {Object} property - The property configuration.
 * @returns {Object} - A populated default prop value.
 */
const propValue = (property) => {
  const { defaultValue, initialValue, placeholder, type } = property;

  if (initialValue !== undefined) {
    const { type, value } = initialValue;

    return type ? { id: uuid(), type, value } : initialValue;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  if (type === 'node' && placeholder) {
    return { id: uuid(), type: 'element', value: { type: 'placeholder' } };
  }

  if (type === 'element' && placeholder) {
    return { type: 'placeholder' };
  }

  return undefined;
}

/**
 * Populates the props for the element being created.
 * @param {Object} config - The element plugin configuration. 
 * @returns {Object} - An object with populated prop values.
 */
const defaultProps = (config) => {
  const { props = {} } = config;
  const properties = {};

  Object.keys(props).forEach((property) => {
    const { type } = props[property];
    const value = propValue(props[property]);

    properties[property] = { id: uuid(), type, value };
  });

  return properties;
}

/**
 * Creates a new element node.
 * @param {string} type - The element type. 
 * @returns {Object} - A node data structure.
 */
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