import { useContext } from 'react';
import ApplicationContext from '../application-context';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { titleCase } from '../utils';

const renderTreeItem = (node) => {
  const { id, value } = node;
  const { type, props = {} } = value;

  const children = [];
  Object.keys(props).forEach((prop) => {
    const property = props[prop];

    if (!property.value) {
      return;
    }

    if (property.type === 'element') {
      children.push(renderTreeItem(property.value));
    } else if (property.type === 'node' && Array.isArray(property.value)) {
      property.value.forEach((item) => {
        if (item.type === 'element') {
          children.push(renderTreeItem(item));
        }
      })
    } else if (property.type === 'node' && property.value.type === 'element') {
      children.push(renderTreeItem(property.value));
    }
  });

  return (
    <TreeItem key={id} nodeId={id} label={titleCase(type)}>
      {children}
    </TreeItem>
  );
};

/**
 * The layers tree renders a tree view of the element nodes within the workspace.
 */
const Layers = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const { tree } = state;

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
    >
      {renderTreeItem(tree)}
    </TreeView>
  )
};

export default Layers;