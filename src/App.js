import classNames from 'classnames/bind';
import styles from './App.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

var cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('application')}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={cx('title')}>
            Material Sandbox
          </Typography>
          <Tooltip title="Github Repository">
          <Link 
            href="https://github.com/creative/material-sandbox" 
            color="inherit" 
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>      
      <div className={cx('main')}>
        <div className={cx('left')}>Side</div>
        <div className={cx('middle')}>Middle</div>
        <div className={cx('right')}>Side</div>
      </div>
    </div>
  );
}

export default App;
