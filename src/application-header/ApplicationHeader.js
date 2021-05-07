import { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import AppBar from '@material-ui/core/AppBar';
import ApplicationContext from '../application-context';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import styles from './ApplicationHeader.module.scss';

var cx = classNames.bind(styles);

const ApplicationHeader = () => {
  const { dispatch, state } = useContext(ApplicationContext);
  const { theme } = state;
  const { palette } = theme;
  const { mode } = palette;

  const dispatchThemeUpdate = useCallback(() => {
    dispatch({ type: 'SET_THEME_MODE', mode: mode === 'dark' ? 'light' : 'dark' })
  }, [dispatch, mode]);

  return (
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
        <Tooltip title="Toggle light/dark theme">
          <IconButton sx={{ ml: 1 }} onClick={dispatchThemeUpdate} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default ApplicationHeader;