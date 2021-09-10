import { modify } from '../tree';

/**
 * Appends a node to the root children array.
 * @param {Object} state - The application state.
 * @param {Object} action - The reducer action.
 * @param {Object} action.payload- The payload data of the component being appended.
 * @returns {Object} - The updated state.
 */
const append = (state, action) => {
  const { tree } = state;
  const { payload } = action;
  const { target, value } = payload;

  return {
    ...state,
    tree: modify('APPEND', tree, target, value),
  };
};

export default append;
