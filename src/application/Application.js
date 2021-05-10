import { useMemo, useReducer } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames/bind';
import ApplicationContext from '../application-context';
import ApplicationHeader from '../application-header/ApplicationHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import reducer, { initialState } from '../reducer';
import styles from './Application.module.scss';

var cx = classNames.bind(styles);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const { theme } = state;
  const themeContextValue = useMemo(() => (createMuiTheme(theme)), [theme]);

  return (
    <ApplicationContext.Provider value={contextValue}>
      <ThemeProvider theme={themeContextValue}>
        <div className={cx('application')}>
          <ApplicationHeader />
          <div className={cx('main')}>
            <Paper className={cx('left')} variant="outlined" square>
              Left
            </Paper>
            <Paper square className={cx('middle')}>
              <Container maxWidth={false} className={cx('middle-container')}>
                <Paper variant="outlined" className={cx('canvas')}>
                  Canvas
              </Paper>
              </Container>
            </Paper>
            <Paper className={cx('right')} variant="outlined" square>
              Right
            </Paper>
          </div>
        </div>
      </ThemeProvider>
    </ApplicationContext.Provider>
  );
}

export default App;
