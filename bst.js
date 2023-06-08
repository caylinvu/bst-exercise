class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
    }

    buildTree() {
        let sortedArr = this.removeDuplicates().sort((a, b) => {return a - b});
        console.log(sortedArr);
        let start = 0;
        let end = sortedArr.length - 1;
        this.root = this.sortedArrayToBST(sortedArr, start, end);
        return this.root;
    }

    removeDuplicates() {
        let tmpArr = this.arr;
        let newArr = [];
        tmpArr.forEach((item) => {
            if (!newArr.includes(item)) {
                newArr.push(item);
            }
        });
        return newArr;
    }

    sortedArrayToBST(arr, start, end) {
        if (start > end) {
            return null;
        }
        let mid = parseInt((start + end) / 2);
        let node = new Node(arr[mid]);
        node.left = this.sortedArrayToBST(arr, start, mid - 1);
        node.right = this.sortedArrayToBST(arr, mid + 1, end);
        return node;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree);
tree.buildTree();
tree.prettyPrint(tree.root);