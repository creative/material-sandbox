import { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import AppBar from '@mui/material/AppBar';
import ApplicationContext from '../application-context';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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