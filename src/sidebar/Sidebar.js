import classNames from 'classnames/bind';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import plugins from '../plugins';
import styles from './Sidebar.module.scss';

var cx = classNames.bind(styles);

const componentKeys = Object.keys(plugins);

const Sidebar = () => {

  const items = [];

  for (let index = 0; index < componentKeys.length; index += 1) {
    const key = componentKeys[index];
    const { hidden } = plugins[key];

    if (!hidden) {
      items.push(<div
        key={key}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('SANDBOX.DATA', JSON.stringify({ type: key }));
        }}
      >
        {key}
      </div>);
    }
  }

  return (
    <Paper className={cx('sidebar')} variant="outlined" square>
      <div>
        <div>
          <div>
            Components
          </div>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            fullWidth
            size="small"
            placeholder="Search Components"
            type="search"
          />
        </div>
        <div>
          {items}
        </div>
      </div>
    </Paper>
  );
}

export default Sidebar;