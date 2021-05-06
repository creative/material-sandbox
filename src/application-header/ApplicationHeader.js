import classNames from 'classnames/bind';
import AppBar from '@material-ui/core/AppBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import styles from './ApplicationHeader.module.scss';

var cx = classNames.bind(styles);

const ApplicationHeader = () => (
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
);

export default ApplicationHeader;