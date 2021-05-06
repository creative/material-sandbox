import classNames from 'classnames/bind';
import ApplicationHeader from '../application-header/ApplicationHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styles from './Application.module.scss';

var cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('application')}>
      <ApplicationHeader />
      <div className={cx('main')}>
        <Paper className={cx('left')} variant="outlined" square>
          Left
        </Paper>
        <Container className={cx('middle')}>
          <Paper square variant="outlined" className={cx('canvas')}>
            Canvas
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
