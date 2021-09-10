import Button from '@material-ui/core/Button';

const button = {
  description: 'Buttons allow users to take actions, and make choices, with a single tap.',
  displayName: 'Button',
  elementType: Button,
  props: {
    disabled: {
      type: 'bool',
      description: 'If true, the component is disabled.',
      defaultValue: false
    },
    children: {
      type: 'node',
      description: 'The content of the component.',
      initialValue: 'Button Text'
    },
    color: {
      type: 'string',
      description: 'The color of the component. It supports those theme colors that make sense for this component.',
      defaultValue: 'primary',
      options: [
        { value: 'inherit', type: 'string' },
        { value: 'primary', type: 'string' },
        { value: 'secondary', type: 'string' },
        { value: 'success', type: 'string' },
        { value: 'error', type: 'string' },
        { value: 'info', type: 'string' },
        { value: 'warning', type: 'string' }
      ]
    },
  },
};

export default button;
