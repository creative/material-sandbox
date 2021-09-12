import { modify } from '../tree';

/**
 * Modifies the tree with a provided action.
 * @param {Object} state - The application state.
 * @param {Object} action - The reducer action.
 * @param {Object} action.payload- The payload data of the component being appended.
 * @returns {Object} - The updated state.
 */
const modifyTree = (state, action) => {
  const { selected, tree } = state;
  const { payload } = action;
  const { target, value } = payload;

  let selectedNode = selected;
  if (payload.action === 'APPEND') {
    selectedNode = value.id;
  } else if (payload.action === 'REPLACE') {
    selectedNode = target;
  }

  // const selected = payload.action === 'APPEND' ? value.id : target;

  return {
    ...state,
    selected: selectedNode,
    tree: modify(payload.action, tree, target, value),
  };
};

export default modifyTree;
