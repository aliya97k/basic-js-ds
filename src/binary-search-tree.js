const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.roott = null;
  }

  root() {
    return this.roott ? this.roott : null;
  }

  add(data) {
    this.roott = addWithin(this.roott, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return dataHas(this.roott, data);
    function dataHas(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        dataHas(node.left, data):
        dataHas(node.right, data);
    }
  }

  find(data) {
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }

}