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

    find(value) {
        return this.findRec(this.root, value);
    }

    findRec(root, value) {
        if (root === null) {
            console.log('Value not found in tree')
            return root;
        }
        if (value === root.data) {
            return root;
        }
        if (value < root.data) {
            return this.findRec(root.left, value);
        } else if (value > root.data) {
            return this.findRec(root.right, value);
        }
    }

    print(root) {
        console.log(root);
    }

    levelOrder(callback, root = this.root) {
        if (root === null) {
            return;
        }
        let q = [root];
        let arr = [];
        let node = '';
        while (q.length > 0) {
            node = q.shift();
            arr.push(node.data);
            if (node.left != null) {
                q.push(node.left);
            }
            if (node.right != null) {
                q.push(node.right);
            }
            if (callback) {
                callback(node);
            }
        }
        if (!callback) {
            return arr;
        }
    }

    inorder(callback, root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        this.inorder(callback, root.left, arr);
        if (callback) {
            callback(root);
        }
        arr.push(root.data);
        this.inorder(callback, root.right, arr);
        if (!callback) {
            return arr;
        }
    }

    preorder(callback, root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        if (callback) {
            callback(root);
        }
        arr.push(root.data);
        this.preorder(callback, root.left, arr);
        this.preorder(callback, root.right, arr);
        if (!callback) {
            return arr;
        }
    }

    postorder(callback, root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        this.postorder(callback, root.left, arr);
        this.postorder(callback, root.right, arr);
        if (callback) {
            callback(root);
        }
        arr.push(root.data);
        if (!callback) {
            return arr;
        }
    }

    height(root = this.root) {
        if (root === null || (root.left === null && root.right === null)) {
            return 0;
        }

        let leftHeight = this.height(root.left) + 1;
        let rightHeight = this.height(root.right) + 1;

        if (leftHeight >= rightHeight) {
            return leftHeight;
        } else if (rightHeight > leftHeight) {
            return rightHeight;
        }
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.buildTree();
console.log(tree);
tree.prettyPrint(tree.root);
console.log(tree.height());