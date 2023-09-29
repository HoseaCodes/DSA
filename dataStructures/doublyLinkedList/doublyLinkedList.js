class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pervious = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.pervious = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(data) {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.pervious = node;
            this.head = node;
        }
        this.length++;
    }

    insertAt(index, data) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) {
            return this.prepend(data)
        } 
        if (index === this.length) {
            return this.append(data)
        } 

        const newNode = new Node(data);
        let currentNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next; 
        }

        newNode.next = currentNode.next;
        newNode.pervious = currentNode;
        currentNode.next.pervious = newNode;
        currentNode.next = newNode
        this.length++
    }

    get(index) {
        if (index < 0 || index > this.length) return null;

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode
    }

    remove(index) {
        if (index < 0 || index > this.length) return null;

        if (index === 0) {
            this.head = this.head.next;  
            
            if (this.head) {
                this.head.pervious = null;
            } else {
                this.tail = null;
            }
        
        } else if (index === this.length - 1) {
            this.tail = this.tail.pervious;

            if (this.tail) {
                this.tail = null;
            } else {
                this.head = null;
            }
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }

            currentNode.pervious.next = currentNode.next;
            currentNode.next.pervious = currentNode.pervious;

        }
        this.length--;
    }

    contains(data) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === data) {
                return true
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    printAll() {
        let currentNode = this.head;

        while(currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

module.exports = { DoublyLinkedList }