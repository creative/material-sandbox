import { v4 as uuidv4 } from 'uuid'

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

export default Node;
