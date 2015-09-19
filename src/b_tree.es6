class Node {
  constructor(data) {
    this.data   = data;
    this.right  = null;
    this.middle = null;
    this.left   = null;
    this.parent = null;
  }
}

class BTree {
  constructor(rootValue, comparison) {
    this.root = new Node(rootValue);
    this.comparison = comparison;
  }

  findTailFor(nodeValue) {
    return this.recurseTree(this.root, nodeValue);
  }

  recurseTree(currentNode, nodeValue) {
    let result = this.comparison(currentNode.data, nodeValue);

    if (nodeValue === currentNode.data) {
      return currentNode;
    }
    else if(this.isDirection(result)) {
      return this.direct(currentNode, nodeValue, result);
    }
    else {
      return false;
    }
  }

  direct(currentNode, nodeValue, direction) {
    if(currentNode[direction]) {
      return this.recurseTree(currentNode[direction], nodeValue);
    }
    else {
      return currentNode;
    }
  }

  isDirection(string) {
    return string === 'left' || string === 'middle' || string === 'right'
  }

  add(nodeValue) {
    let node = new Node(nodeValue)
    let tail = this.findTailFor(nodeValue);
    let result = this.comparison(node.data, tail.data);

    if(this.isDirection(result)) {
      tail[result] = node;
      return node;
    }
    else {
      return false;
    }
  }
}

export default BTree;
