const { v4: uuidv4 } = require('uuid');

class Node {
  constructor(options) {
    const { id, parent, type, value } = options;

    this.id = id || uuidv4();
    this.parent = parent;
    this.type = type;
    this.value = value;
  }

  /**
   * Updates the node value.
   * @param {*} value - The new node value.
   */
  update(value) {
    this.value = value;
  }

  /**
   * Appends a node to the current node.
   * @param {Node} node - The node to append. 
   */
  append(node) {
    if (this.type === 'node') {
      if (!this.value) {
        this.update(node);
      } else if (Array.isArray(this.value)) {
        this.value.push(node);
      } else {
        this.update([this.value, node]);
      }
    } else if (this.type === 'array') {
      if (this.value) {
        this.value.push(node);
      } else {
        this.update([node]);
      }
    }
  }
}

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

const tree = new Tree();

// console.log(tree);

// tree.append('root', { value: 'Hello', type: 'string' });
tree.append('root', { id: 'test', type: 'array' });
tree.append('test', { value: 'foobar', type: 'string' });

console.log(JSON.stringify(tree.root, null, 2));
