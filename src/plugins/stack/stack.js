import Stack from '@mui/material/Stack';

const stack = {
  description: 'The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.',
  elementType: Stack,
  props: {
    component: {
      type: 'string',
      description: 'The component used for the root node. Either a string to use a DOM element or a component.',
      defaultValue: 'div',
      options: [
        { value: 'div', type: 'string' },
        { value: 'span', type: 'string' },
      ]
    },
    direction: {
      type: 'string',
      description: 'Defines the flex-direction style property. It is applied for all screen sizes.',
      defaultValue: 'column',
      options: [
        { value: 'column-reverse', type: 'string' },
        { value: 'column', type: 'string' },
        { value: 'row-reverse', type: 'string' },
        { value: 'row', type: 'string' },
      ]
    },
    alignItems: {
      type: 'string',
      description: '',
      defaultValue: '',
      options: [
        { value: '', display: 'None', type: 'string' },
        { value: 'flex-start', type: 'string' },
        { value: 'center', type: 'string' },
        { value: 'flex-end', type: 'string' },
        { value: 'stretch', type: 'string' },
        { value: 'baseline', type: 'string' },
      ]
    },
    justifyContent: {
      type: 'string',
      description: '',
      defaultValue: '',
      options: [
        { value: '', display: 'None', type: 'string' },
        { value: 'flex-start', type: 'string' },
        { value: 'center', type: 'string' },
        { value: 'flex-end', type: 'string' },
        { value: 'space-between', type: 'string' },
        { value: 'space-around', type: 'string' },
        { value: 'space-evenly', type: 'string' },
      ]
    },
    spacing: {
      type: 'number',
      description: 'Defines the space between immediate children.'
    },
    children: {
      type: 'node',
      description: 'The content of the component.',
      placeholder: true,
    },
    divider: {
      type: 'node',
      description: 'Add an element between each child.'
    },
  },
};

export default stack;
