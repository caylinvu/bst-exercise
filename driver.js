const Tree = require('./bst.js');

function randomArray() {
    return Array.from({length: 30}, () => Math.floor(Math.random() * 100));
}

const driverTree = new Tree(randomArray());
driverTree.buildTree();
console.log(driverTree);
driverTree.prettyPrint();

console.log("Balanced: " + driverTree.isBalanced());
console.log("Level order traversal: " + driverTree.levelOrder());
console.log("Preorder traversal: " + driverTree.preorder());
console.log("Postorder traversal: " + driverTree.postorder());
console.log("Inorder traversal: " + driverTree.inorder());

for (i = 0; i < 5; i++) {
    driverTree.insert(Math.floor((Math.random() * 101) + 100));
}

driverTree.prettyPrint();
console.log("Balanced: " + driverTree.isBalanced());

driverTree.rebalance();
driverTree.prettyPrint();
console.log("Balanced: " + driverTree.isBalanced());
console.log("Level order traversal: " + driverTree.levelOrder());
console.log("Preorder traversal: " + driverTree.preorder());
console.log("Postorder traversal: " + driverTree.postorder());
console.log("Inorder traversal: " + driverTree.inorder());