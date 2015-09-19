# BTree

An implementation of a simple b tree with 3 children and takes in a
comparison function to calculate the direction of insertion and
navigation.

## Compile from ES6 to ES5
`babel src/b_tree.es6 --out-file index.js`

## Run Mocha and Chai Tests
`./node_modules/.bin/mocha --compilers js:babel/register`

## Known Issues

## Usage

```javascript
import BTree from 'b_tree';

let comparison = (treeVal, newVal) => {
  if(newVal > treeVal) {
    return 'left';
  }
  else if(newVal === treeVal) {
    return 'middle';
  }
  else if(newVal < treeVal){
    return 'left';
  }
};

let bTree = new BTree(6, comparison);

bTree.add(3);
bTree.add(6);
bTree.add(7);
```

## Public Interface

### constructor(rootValue, comparison)

Takes in a root value and a comparison function to help build and traverse
the tree. Both attributes are public.

### add(nodeValue)

Adds a new value to the b tree

### findTailFor(nodeValue)

Find where in the tree to insert a new value or where a current value
exists.

### recurseTree(currentNode, nodeValue)

Navigate through the tree from any given point.

### direct(currentNode, nodeValue, direction)

Move in a specific direction in the tree while traversing.

### isDirection(string)

Checks that a specific direction string is a valid
