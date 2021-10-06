import classNames from 'classnames/bind';
import Paper from '@mui/material/Paper';
import Catalog from '../catalog/Catalog';
import Layers from '../layers/Layers';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () =>  (
  <Paper className={cx('sidebar')} variant="outlined" square>
    <div className={cx('top-section')}>
      <Catalog />
    </div>
    <div className={cx('bottom-section')}>
      <Layers />
    </div>
  </Paper>
);

export default Sidebar;