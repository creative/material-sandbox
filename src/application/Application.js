import { useEffect, useMemo, useReducer } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import classNames from 'classnames/bind';
import ApplicationContext from '../application-context';
import ApplicationHeader from '../application-header/ApplicationHeader';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Editor from '../editor/Editor';
import Sidebar from '../sidebar/Sidebar';
import reducer, { initialState } from '../reducer';
import styles from './Application.module.scss';

var cx = classNames.bind(styles);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const { theme } = state;
  const themeContextValue = useMemo(() => (createTheme(theme)), [theme]);

  useEffect(() => {
    function postUpdate() {
      // Communicate state updates to the iframe.
      const sandbox = document.getElementById('sandbox-iframe');

      if (sandbox) {
        sandbox.contentWindow.postMessage({ type: 'SANDBOX.STATE.UPDATE', payload: { state } });
      }
    }

    /**
     * Handles messages from other windows.
     */
    function handleMessage(event) {
      const { data } = event;
      const { type, payload } = data;

      switch (type) {
        case 'SANDBOX.DISPATCH.MODIFY':
          dispatch({ type: 'MODIFY', payload });
          break;
        case 'SANDBOX.STATE.REQUEST':
          postUpdate();
          break;
        case 'SANDBOX.DISPATCH.SELECT':
          dispatch({ type: 'SELECT', payload });
          break;
        default:
          console.log('WARNING: Unsupported message.');
      }
    }

    postUpdate();

    // Register events.
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [state]);

  return (
    <ApplicationContext.Provider value={contextValue}>
      <ThemeProvider theme={themeContextValue}>
        <div className={cx('application')}>
          <ApplicationHeader />
          <div className={cx('main')}>
            <Sidebar />
            <Paper square className={cx('middle')}>
              <Container maxWidth={false} className={cx('middle-container')}>
                <iframe id="sandbox-iframe" src="/sandbox.html" title="sandbox" />
              </Container>
            </Paper>
            <Paper className={cx('right')} variant="outlined" square>
              <Editor />
            </Paper>
          </div>
        </div>
      </ThemeProvider>
    </ApplicationContext.Provider>
  );
}

export default App;
