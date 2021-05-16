import classNames from 'classnames/bind';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Sidebar.module.scss';

var cx = classNames.bind(styles);

const Sidebar = () => (
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
          placeholder="Search Components"
          type="search"
        />
      </div>
      <div>
        Catalog
      </div>
    </div>
  </Paper>
);

export default Sidebar;