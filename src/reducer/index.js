import initialState from './initial-state';
import setThemeMode from './set-theme-mode';
import modify from './modify';

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'MODIFY':
      return modify(state, action);
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
