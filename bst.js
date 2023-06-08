class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.origArr = arr;
        this.sortedArr = null;
        this.root = null;
    }

    buildTree() {
        let sortedArr = this.removeDuplicates().sort((a, b) => {return a - b});
        this.sortedArr = sortedArr;
        let start = 0;
        let end = sortedArr.length - 1;
        this.root = this.sortedArrayToBST(sortedArr, start, end);
        return this.root;
    }

    removeDuplicates() {
        let tmpArr = this.origArr;
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

    insert(value) {
        this.root = this.insertRec(this.root, value);
    }

    insertRec(root, value) {
        if (root === null) {
            root = new Node(value);
            return root;
        }
        if (value < root.data) {
            root.left = this.insertRec(root.left, value);
        } if (value > root.data) {
            root.right = this.insertRec(root.right, value);
        }
        return root;
    }

    delete(value) {
        this.root = this.deleteRec(this.root, value)
    }

    deleteRec(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.data) {
            root.left = this.deleteRec(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteRec(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            root.data = this.minValue(root.right);
            root.right = this.deleteRec(root.right, root.data);
        }
        return root;
    }

    minValue(root) {
        let minVal = root.data;
        while (root.left != null) {
            minVal = root.left.data;
            root = root.left;
        }
        return minVal;
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.buildTree();
console.log(tree);
tree.prettyPrint(tree.root);
