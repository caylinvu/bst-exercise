# Binary Search Trees
Binary search tree exercises from The Odin Project Curriculum (using JavaScript)

## Functions
  * `buildtree(array)` takes an `array` of data and turns it into a balanced binary tree full of `Node` objects appropriately placed; returns the level-0 root node
  * `insert(value)` accepts a `value` to insert into the tree
  * `delete(value)` accepts a `value` to remove from the tree
  * `find(value)` accepts a `value` and returns the node with the given `value`
  * `levelOrder(function)` accepts another `function` as a parameter and traverses the tree in breadth-first level order, providing each node as the argument to the provided `function`; returns an array of values if no function is given
  * `inorder(function)`, `preorder(function)`, and `postorder(function)` each accept a `function` as a parameter and traverses the tree in their respective depth-first order, providing each node to the provided `function` given as an argument; returns an array of values if no function is given
  * `height(node)` accepts a `node` and returns its height (defined as the number of edges in longest path from a given `node` to a leaf node)
  * `depth(node)` accepts a `node` and returns its depth (definded as the number of edges in path from a given `node` to the tree's rooth node)
  * `isBalanced()` checks if a tree is balanced and returns true or false
  * `rebalance()` rebalances an unbalanced tree