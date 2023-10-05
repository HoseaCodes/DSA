import { TreeNode } from "../treeNode/treeNode";

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    findMin() {
        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    findMax() {
        let currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    printTree() {
        const printNode = (node) => {
            if (node === null) return;

            printNode(node.left);
            console.log(node.value);
            printNode(node.right);
        }
        
        printNode(this.root);
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    lookup(value) {
        let currentNode = this.root;

        if (!currentNode) return null;

        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }

        return null;
    }

    remove(value) {
        const removeNode = (node, value) => {
            if (node === null) return null;

            if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeNode(node.right, value);
                return node;
            } else {
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left
                } 

                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            }
        }

        this.root = removeNode(this.root, value)

    }

    search(value) {
        let currentNode = this.root;
        while (currentNode.value !== value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            if (currentNode === null) return null
        }
        return currentNode;
    }

}

module.exports = { BinarySearchTree }

const bst = new BinarySearchTree();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(4);
console.log(bst.findMax());
console.log(bst.isPresent(4));
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log(bst.findMax());

