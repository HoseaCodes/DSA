/*
Elements passed in with a higher priority are sent to the beginning of the queue. 
If no priority is set it will work like a normal queue. 

*/

class PriorityQueue {
    constructor() {
        this.collection = []
    }

    printCollection() {
        console.log(this.collection)
    }

    isEmpty() {
        return (this.collection.length === 0);
    }

    enqueue(value) {
        if (this.isEmpty()) {
            this.collection.push(value)
        } else {
            const added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (value[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, value)
                    added = true;
                    break
                }
                if (!added) this.collection.push(value)
                
            }
        }
    }

    front() {
        return this.collection[0]
    }

    size() {
        return this.collection.length
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.collection.shift()
        return value;
    }
}

const pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2])
pq.enqueue(['Quincy Larson', 3])
pq.enqueue(['Ewa Mitulska-Wójcik', 2])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection()