import { modify } from '../tree';

/**
 * Modifies the tree with a provided action.
 * @param {Object} state - The application state.
 * @param {Object} action - The reducer action.
 * @param {Object} action.payload- The payload data of the component being appended.
 * @returns {Object} - The updated state.
 */
const modifyTree = (state, action) => {
  const { tree } = state;
  const { payload } = action;
  const { target, value } = payload;

  return {
    ...state,
    tree: modify(payload.action, tree, target, value),
  };
};

export default modifyTree;
