# Max Heap

- _percolateUp(): restores the heap property from a child node to a root node.
- _maxHeapify(): restores the heap property from a specific node down to leaf nodes.
- insert(): appends a given value to the heap array and rearranges elements based on their heap property. On every new insert, the heap grows uniformly, and the size increases by one.
- getMax(): returns the maximum value in the heap (root node) without modifying the heap. Note that the time complexity here is constant time O(1)
- removeMax(): returns and removes the maximum value in the heap (think of pop()). The time complexity of this function is in O(log(n)).

```js
class maxHeap {
    constructor() {
        this.heap = [];
        this.elements = 0;
    };

    insert(val) {
        if (this.elements >= this.heap.length) {
            this.elements = this.elements + 1;
            this.heap.push(val);
            this.__percolateUp(this.heap.length - 1);
        }
        else {
            this.heap[this.elements] = val;
            this.elements = this.elements + 1;
            this.__percolateUp(this.elements - 1);
        }
    };

    getMax() {
        if (this.elements !== 0)
            return this.heap[0];
        return null;
    };

    removeMax() {
        let max = this.heap[0];
        if (this.elements > 1) {
            this.heap[0] = this.heap[this.elements - 1];
            this.elements = this.elements - 1;
            this.__maxHeapify(0);
            return max
        } else if (this.elements === 1) {
            this.elements = this.elements - 1;
            return max;
        } else {
            return null;
        }
    };

    __percolateUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index <= 0)
            return
        else if (this.heap[parent] < this.heap[index]) {
            let tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            this.__percolateUp(parent);
        }
    };
    
    __maxHeapify(index) {
        let left = (index * 2) + 1;
        let right = (index * 2) + 2;
        let largest = index;
        if ((this.elements > left) && (this.heap[largest] < this.heap[left])) {
            largest = left
        }
        else if ((this.elements > right) && (this.heap[largest] < this.heap[right]))
            largest = right
        else if (largest !== index) {
            const tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.__maxHeapify(largest);
        }
    };

    buildHeap(arr) {
        this.heap = arr;
        this.elements = this.heap.length;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.__maxHeapify(i);
        }

    };
};
let heap = new maxHeap();
```