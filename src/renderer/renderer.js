import React from "react";
import plugins from '../plugins';

class Renderer {
  static props(props = {}) {
    const properties = {};

    Object.keys(props).forEach((property) => {
      const propertyValue = Renderer.render(props[property]);

      if (propertyValue !== null) {
        properties[property] = propertyValue;
      }
    });

    return properties;
  }

  static createElement(node) {
    const { id, value } = node;
    const { props, type } = value;

    const config = plugins[type];

    if (config) {
      const { elementType } = config;
      const properties = Renderer.props(props);

      return React.createElement(elementType, { key: id, id, ...properties });
    }

    return <div key={id}>Whoops, bad component</div>;
  }

  static render(node) {
    const { type, value } = node;

    if (value === undefined || value === null) {
      return value;
    }

    if (type === 'node' && Array.isArray(value)) {
      const items = value.map((item) => Renderer.render(item));

      return items.length === 1 ? items[0] : items;
    }

    if (type === 'node') {
      return Renderer.render(value);
    }

    if (type === 'element') {
      return Renderer.createElement(node);
    }

    if (type === 'string' || type === 'bool') {
      return value;
    }


    return null;
  }
}

export default Renderer;