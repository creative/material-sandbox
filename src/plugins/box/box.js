import Box from '@mui/material/Box';

const box = {
  description: 'The Box component serves as a wrapper component for most of the CSS utility needs.',
  elementType: Box,
  props: {
    children: {
      type: 'node',
      description: 'Box render function or node.',
      placeholder: true
    },
    component: {
      type: 'string',
      description: 'The component used for the root node. Either a string to use a DOM element or a component.',
      defaultValue: 'div',
      options: [
        { value: 'div', type: 'string' },
        { value: 'span', type: 'string' },
      ]
    },
  },
};

export default box;
