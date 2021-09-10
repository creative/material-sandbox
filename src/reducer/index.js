import initialState from './initial-state';
import setThemeMode from './set-theme-mode';
import append from './append';

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'APPEND':
      return append(state, action);
    case 'SET_THEME_MODE':
      return setThemeMode(state, action);
    default:
      // eslint-disable-next-line no-console
      console.log('WARNING: Unsupported reducer action.');
      return state;
  }
};

export default reducer;
export { initialState };
