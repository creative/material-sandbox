import classNames from 'classnames/bind';
import styles from './App.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

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
        <Paper className={cx('left')} variant="outlined" square>
          Left
        </Paper>
        <Container className={cx('middle')}>
          <Paper square variant="outlined" className={cx('canvas')}>
            <div>
              Canvas
            </div>
          </Paper>
        </Container>
        <Paper className={cx('right')} variant="outlined" square>
          Right
        </Paper>
      </div>
    </div>
  );
}

export default App;
