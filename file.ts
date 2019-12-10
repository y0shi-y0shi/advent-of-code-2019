const reversal = s => {
    return s.split("").reverse().join("");
}

const _reversal = (s: string) => s.split("").reduce((acc, i) => i + acc);

const fibonacci = (n: number) => {
    const result = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }

    return result[n];
}

const fibonacci_recursive = n => n < 2 ? 1 : fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);

const fib = n => n < 3 ? 1 : fib(n - 1) + fib(n - 2);

const fib_closed = n => {
    const p = (1 + 5 ** (1 / 2)) / 2;
    return (p ** n - (-p) ** (-n)) / (5 ** (1 / 2))
}

const fibonacci_reducer = n => new Array(n).fill(0).map((_, i, arr) => arr[i] = i < 2 ? 1 : arr[i - 1] + arr[i - 2]);

// Should be [1, 1, 2, 3, 5, 8]


// console.log(fib_closed(50));

class Stack {
    public count = 0;
    public storage = {};

    constructor() { };

    push = value => {
        this.storage[this.count] = value;
        this.count++;
    }

    pop = () => {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size = () => this.count;

    peek = () => this.storage[this.count - 1]
}

var myStack = new Stack();


class mySet {
    collection = [];

    has = el => this.collection.indexOf(el) !== -1;

    values = () => this.collection;

    add = el => {
        if (!this.has(el)) {
            this.collection.push(el);
            return true;
        }
        return false;
    };

    remove = el => {
        if (this.has(el)) {
            const index = this.collection.indexOf(el);
            this.collection.splice(index, 1);
        }
    }

    size = () => this.collection.length;

    union = (otherSet: mySet) => {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(e => unionSet.add(e));

        secondSet.forEach(e => unionSet.add(e));
        return unionSet;
    }

    intersection = (otherSet: mySet) => {
        const intersectionSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    difference = (otherSet: mySet) => {
        const differenceSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    subset = (otherSet: mySet) => {
        const firstSet = this.values();
        return firstSet.every(v => otherSet.has(v));
    }
}

const setA = new mySet();
const setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

const setC = new Set();
const setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');

// Binary Search Tree

class Node2 {
    public data: number;
    public left: Node2;
    public right: Node2;
    constructor(data: number, left: Node2 = null, right: Node2 = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    root: Node2;
    constructor() {
        this.root = null;
    }

    add(data: number){
        const node = this.root;
        
        if (node === null) {
            this.root = new Node2(data);
            return;
        } else {
            const searchTree = (node: Node2) => {
                if (data < node.data) {
                    if(node.left === null) {
                        node.left = new Node2(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node2(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }                    
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data: number) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data: number) {
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
    remove(data: number) {
        const removeNode = (node: Node2, data: number) => {

        }
    }
}