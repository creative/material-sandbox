import { useContext } from 'react';
import { find } from '../tree';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ApplicationContext from '../application-context';
import plugins from '../plugins';

const Editor = () => {
  const { dispatch, state } = useContext(ApplicationContext);
  const { selected, tree } = state;

  if (!selected) {
    return <div>No item selected</div>;
  }

  const node = find(tree, selected);

  console.log(node, selected);

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
        <TextField id={id} fullWidth select label={label} value={value} onChange={(event) => handleChange(id, event.target.value)}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      )
    }

    return <TextField fullWidth label="Size" size="small" value={value} onChange={handleChange} />;
  }

  const buildBoolForm = (label, property, config) => {
    const { id, value } = property;

    return (
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => handleChange(id, event.target.checked)}
            value={value}
          />
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
      return <div>Element</div>;
    } else if (type === 'node') {
      return <div>Node</div>;
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
      const form = buildForm(propertyName, property, config);

      if (form) {
        fields.push(form);
      }
    })

    return fields;
  };

  return (
    <div>
      {`Selected: ${selected}`}
      {buildFields(node)}
    </div>
  );
};

export default Editor;