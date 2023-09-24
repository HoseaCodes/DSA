class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    get(index) {
        let currentNode = this.head;
        let i = 0;

        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode.data;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let perviousNode = null;
            let i = 0;

            while (i < index) {
                perviousNode = currentNode;
                currentNode = currentNode.next;
                i++
            }

            perviousNode.next = currentNode.next; 
        }
    }

    insertAt(index, data) {
        if (index === 0) {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        } else {
            let currentNode = this.head;
            let perviousNode = null;
            let i = 0;

            while (i < index) {
                perviousNode = currentNode;
                currentNode = currentNode.next;
                i++
            }

            const node = new Node(data);
            node.next = currentNode;
            perviousNode.next = node; 
        }
    }

    printAll() {
        let currentNode = this.head;

        while(currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

}

module.exports = {Node, LinkedList}