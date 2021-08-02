import Node from './node';

class Tree {
  /**
   * Initializes a new tree.
   */
  constructor() {
    this.root = new Node({ id: 'root', type: 'node', parent: null });

    this.cache = { root: this.root };
  }

  /**
   * Finds the target node.
   * @param {string} targetID - The target node identifier.
   * @returns - The requested node.
   */
  find(targetID) {
    return this.cache[targetID];
  }

  /**
   * Updates the value of a node.
   * @param {string} targetID - The target node identifier.
   * @param {*} value - The new value. 
   */
  update(targetID, value) {
    this.find(targetID).update(value);
  }

  /**
   * Appends a new node to the target node.
   * @param {string} targetID - The target node identifier.
   * @param {Object} options - The new node options. 
   */
  append(targetID, options) {
    const target = this.find(targetID);
    const node = new Node({ ...options, parent: targetID });

    target.append(node);
    this.cache[node.id] = node;
  }

  /**
   * Deletes the target node.
   * @param {string} targetID - The target node identifier.
   */
  delete(targetID) {
    if (targetID === 'root') {
      this.root = new Node({ id: 'root', type: 'node', parent: null });
      this.cache = { root: this.root };
    }

    // TODO: Arrays, Nodes, Props
  }
}

export default Tree;