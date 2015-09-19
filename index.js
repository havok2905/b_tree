'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.right = null;
  this.middle = null;
  this.left = null;
  this.parent = null;
};

var BTree = (function () {
  function BTree(rootValue, comparison) {
    _classCallCheck(this, BTree);

    this.root = new Node(rootValue);
    this.comparison = comparison;
  }

  _createClass(BTree, [{
    key: 'findTailFor',
    value: function findTailFor(nodeValue) {
      return this.recurseTree(this.root, nodeValue);
    }
  }, {
    key: 'recurseTree',
    value: function recurseTree(currentNode, nodeValue) {
      var result = this.comparison(currentNode.data, nodeValue);

      if (nodeValue === currentNode.data) {
        return currentNode;
      } else if (this.isDirection(result)) {
        return this.direct(currentNode, nodeValue, result);
      } else {
        return false;
      }
    }
  }, {
    key: 'direct',
    value: function direct(currentNode, nodeValue, direction) {
      if (currentNode[direction]) {
        return this.recurseTree(currentNode[direction], nodeValue);
      } else {
        return currentNode;
      }
    }
  }, {
    key: 'isDirection',
    value: function isDirection(string) {
      return string === 'left' || string === 'middle' || string === 'right';
    }
  }, {
    key: 'add',
    value: function add(nodeValue) {
      var node = new Node(nodeValue);
      var tail = this.findTailFor(nodeValue);
      var result = this.comparison(node.data, tail.data);

      if (this.isDirection(result)) {
        tail[result] = node;
        return node;
      } else {
        return false;
      }
    }
  }]);

  return BTree;
})();

exports['default'] = BTree;
module.exports = exports['default'];
