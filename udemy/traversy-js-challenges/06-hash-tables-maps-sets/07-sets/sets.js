const nameSet = new Set(['John', 'Jane', 'Joe', 'John', 'Joe']);
nameSet.add('Jack');
console.log(nameSet.has('Jill'));
console.log(nameSet);
nameSet.delete('Jack');
console.log(nameSet.size);
console.log(nameSet.values());
