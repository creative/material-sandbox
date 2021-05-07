/**
 * Sets the application theme mode.
 * @param {Object} state - The application state.
 * @param {Object} action - The reducer action.
 * @param {Object} action.mode- The theme mode value. (light|dark)
 */
const setThemeMode = (state, action) => {
  const { theme } = state;
  const { mode } = action;

  return {
    ...state,
    theme: {
      ...theme,
      palette: { mode }
    }
  };
};

export default setThemeMode;
