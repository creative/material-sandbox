import { useState } from 'react';
import classNames from 'classnames/bind';
import Card from '@mui/material/Card';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import InfoIcon from '@mui/icons-material/Info';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Layers from '../layers/Layers';
import plugins from '../plugins';
import styles from './Sidebar.module.scss';

var cx = classNames.bind(styles);

const componentKeys = Object.keys(plugins);

const titleCase = (string) => {
  const result = string.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const Sidebar = () => {
  const [search, setSearch] = useState('');

  const items = [];

  for (let index = 0; index < componentKeys.length; index += 1) {
    const key = componentKeys[index];
    const { description, hidden } = plugins[key];

    if (!hidden && key.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1) {
      items.push(
        <Card
          className={cx('card')}
          key={key}
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData('SANDBOX.DATA', JSON.stringify({ type: key }));
          }}
          variant="outlined"
        >
          <DragIndicatorIcon />
          <span className={cx('card-title')}>
            {titleCase(key)}
          </span>
          <Tooltip title={description} placement="right" arrow>
            <InfoIcon className={cx('info-icon')} />
          </Tooltip>
        </Card>
      );
    }
  }

  return (
    <Paper className={cx('sidebar')} variant="outlined" square>
      <div>
        <div>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            fullWidth
            size="small"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Components"
            type="search"
            value={search}
          />
        </div>
        <div>
          {items}
        </div>
        <div>
          <Layers />
        </div>
      </div>
    </Paper>
  );
}

export default Sidebar;