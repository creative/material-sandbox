import Avatar from '@mui/material/Avatar';

const avatar = {
  description: 'Avatar',
  elementType: Avatar,
  props: {
    alt: {
      type: 'string',
      description: 'Used in combination with src or srcSet to provide an alt attribute for the rendered img element.'
    },
    children: {
      type: 'node',
      description: 'Box render function or node.',
      placeholder: true
    },
    component: {
      type: 'string',
      description: 'The component used for the root node. Either a string to use a HTML element or a component.',
      defaultValue: 'div',
      options: [
        { value: 'div', type: 'string' },
        { value: 'span', type: 'string' },
      ]
    },
    sizes: {
      type: 'string',
      description: 'The sizes attribute for the img element.'
    },
    src: {
      type: 'string',
      description: 'The src attribute for the img element.'
    },
    variant: {
      type: 'string',
      description: 'The shape of the avatar.',
      defaultValue: 'circular',
      options: [
        { value: 'circular', type: 'string' },
        { value: 'rounded', type: 'string' },
        { value: 'square', type: 'string' },
      ]
    },
  },
};

export default avatar;
