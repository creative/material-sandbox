import classNames from 'classnames/bind';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
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