class CustomSet {
    constructor () {
        this.collection = [];
    }

    has(value) {
        return this.collection.indexOf(value) !== -1;
    }

    values() {
        return this.collection;
    }

    add(value) {
        if(!this.has(value)) {
            this.collection.push(value);
            return true
        }
        return false;
    }

    remove(value) {
         if(!this.has(value)) {
            index = this.collection.indexOf(value);
            this.collection.splice(index, 1)
            return true
        }
        return false;
    }

    size() {
        return this.collection.length;
    }

    // Return two sets
    union(set) {
        const unionSet = new CustomSet();
        const firestSet = this.values();
        const secondSet = set.values();

        firestSet.forEach((e) => unionSet.add(e))
        secondSet.forEach((e) => unionSet.add(e))

        return unionSet;
    }

    // Return the intersection of two sets as a new set
    intersection(set) {
        const intersectionSet = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach((e) => {
            if (set.has(e)) intersectionSet.add(e)
        })
        return intersectionSet;
    }

    // Retun the difference between the two sets as a new set
    difference(set) {
        const differenceSet = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach((e) => {
            if (!set.has(e)) differenceSet.add(e)
        })
        return differenceSet;
    }

    // Test if the first set is a subset of another set
    subset(set) {
        const firestSet = this.values();
        return firestSet.every((value) => {
            return set.has(value)
        })
    }
}

const setA = new CustomSet();
const setB = new CustomSet();
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('a')
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())