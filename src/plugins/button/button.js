import Button from '@material-ui/core/Button';

const button = {
  description: 'Buttons allow users to take actions, and make choices, with a single tap.',
  elementType: Button,
  props: {
    disabled: {
      type: 'bool',
      description: 'If true, the component is disabled.',
      defaultValue: false
    },
    disableElevation: {
      type: 'bool',
      description: 'If true, no elevation is used.',
      defaultValue: false
    },
    disableFocusRipple: {
      type: 'bool',
      description: 'If true, the keyboard focus ripple is disabled.',
      defaultValue: false
    },
    disableRipple: {
      type: 'bool',
      description: 'If true, the ripple effect is disabled. ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.',
      defaultValue: false
    },
    fullWidth: {
      type: 'bool',
      description: 'If true, the button will take up the full width of its container.',
      defaultValue: false
    },
    children: {
      type: 'node',
      description: 'The content of the component.',
      initialValue: {
        type: 'string',
        value: 'Button Text'
      }
    },
    variant: {
      type: 'string',
      description: 'The variant to use.',
      defaultValue: 'outlined',
      options: [
        { value: 'contained', type: 'string' },
        { value: 'outlined', type: 'string' },
        { value: 'text', type: 'string' },
      ]
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
    size: {
      type: 'string',
      description: 'The size of the component. small is equivalent to the dense button styling.',
      defaultValue: 'medium',
      options: [
        { value: 'small', type: 'string' },
        { value: 'medium', type: 'string' },
        { value: 'large', type: 'string' },
      ]
    },
    startIcon: {
      type: 'node',
      description: 'Element placed before the children.'
    },
    endIcon: {
      type: 'node',
      description: 'Element placed after the children.'
    },
    href: {
      type: 'string',
      description: 'The URL to link to when the button is clicked. If defined, an a element will be used as the root node.'
    },
  },
};

export default button;
