import { useContext } from 'react';
import { find } from '../tree';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ApplicationContext from '../application-context';
import plugins from '../plugins';

const titleCase = (string) => {
  const result = string.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const Editor = () => {
  const { dispatch, state } = useContext(ApplicationContext);
  const { selected, tree } = state;

  if (!selected) {
    return <div>No item selected</div>;
  }

  const node = find(tree, selected);

  /**
 * Handles the change event for string properties.
 * @param {Event} event- The change event.
 */
  const handleChange = (target, value) => {
    dispatch({ type: 'MODIFY', payload: { action: 'UPDATE', target, value } });
  };

  const buildStringForm = (label, property, config) => {
    const { id, value } = property;
    const { options } = config;

    if (options) {
      return (
        <TextField
          fullWidth
          select
          key={id}
          label={label}
          onChange={(event) => handleChange(id, event.target.value)}
          value={value}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.display || option.value}
            </MenuItem>
          ))}
        </TextField>
      )
    }

    return <TextField fullWidth label={label} size="small" value={value} onChange={handleChange} />;
  }

  const buildBoolForm = (label, property, config) => {
    const { id, value } = property;

    return (
      <FormControlLabel
        key={id}
        control={
          <Checkbox onChange={(event) => handleChange(id, event.target.checked)} value={value} />
        }
        label={label}
      />
    )
  }

  const buildForm = (name, property, propertyConfig) => {
    const { type } = property;

    if (type === 'string') {
      return buildStringForm(name, property, propertyConfig);
    } else if (type === 'bool') {
      return buildBoolForm(name, property, propertyConfig);
    } else if (type === 'element') {
      return null;
    } else if (type === 'node') {
      return null;
    }
  }

  const buildFields = () => {
    const { value } = node;

    if (!value) {
      return null;
    }

    const { type, props = {} } = value;

    const fields = [];
    Object.keys(props).forEach((propertyName) => {
      const property = props[propertyName];
      const config = plugins[type].props[propertyName];
      const form = buildForm(titleCase(propertyName), property, config);

      if (form) {
        fields.push(form);
      }
    })

    return fields;
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          p: 1,
          '& .MuiTextField-root': { mt: 1, mb: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup>
          {buildFields(node)}
        </FormGroup>
      </Box>
    </div>
  );
};

export default Editor;