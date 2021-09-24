import { useContext } from 'react';
import ApplicationContext from '../application-context';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { titleCase } from '../utils';

/**
 * Creates a layer of the workspace tree.
 * @param {Object} node - The element node. 
 * @returns - A TreeItem for the element node.
 */
const renderTreeItem = (node) => {
  const { id, value } = node;
  const { type, props } = value;

  const children = renderTreeItemChildren(props);

  return (
    <TreeItem key={id} nodeId={id} label={titleCase(type)}>
      {children}
    </TreeItem>
  );
};

/**
 * Iterates the properties of an element rendering layers of the workspace tree.
 * @param {Object} props - An element properties. 
 * @returns {array} - An array of tree layers.
 */
const renderTreeItemChildren = (props = {}) => {
  const children = [];

  Object.keys(props).forEach((prop) => {
    const property = props[prop];
    const { type, value } = property;

    if (!value) {
      return;
    }

    if (type === 'element') {
      children.push(renderTreeItem(value));
    } else if (type === 'node') {
      children.push(...renderNodeChildren(property))
    }
  });

  return children;
};

/**
 * Iterates the node datatype rendering layers of the tree.
 * @param {Object} node - The tree node object.
 * @returns {array} - An array of element nodes.
 */
const renderNodeChildren = (node) => {
  const { value } = node;

  const children = [];

  (Array.isArray(value) ? value : [value]).forEach((item) => {
    const { type } = item;

    if (type === 'element') {
      children.push(renderTreeItem(item));
    }
  });

  return children;
};

/**
 * The layers tree renders a tree view of the element nodes within the workspace.
 */
const Layers = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const { selected, tree } = state;

  /**
   * Handles tree view selections.
   * @param {Event} _event - The event triggering the selection. 
   * @param {string} id - The target identifier to select.
   */
  const handleSelection = (_event, id) => {
    dispatch({ type: 'SELECT', payload: { target: id } });
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSelection}
      selected={selected || ''}
    >
      {renderTreeItem(tree)}
    </TreeView>
  )
};

export default Layers;