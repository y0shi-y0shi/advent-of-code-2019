const reversal = s => {
    return s.split("").reverse().join("");
};
const _reversal = (s) => s.split("").reduce((acc, i) => i + acc);
const fibonacci = (n) => {
    const result = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result[n];
};
const fibonacci_recursive = n => n < 2 ? 1 : fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
const fib = n => n < 3 ? 1 : fib(n - 1) + fib(n - 2);
const fib_closed = n => {
    const p = (1 + Math.pow(5, (1 / 2))) / 2;
    return (Math.pow(p, n) - Math.pow((-p), (-n))) / (Math.pow(5, (1 / 2)));
};
const fibonacci_reducer = n => new Array(n).fill(0).map((_, i, arr) => arr[i] = i < 2 ? 1 : arr[i - 1] + arr[i - 2]);
// Should be [1, 1, 2, 3, 5, 8]
// console.log(fib_closed(50));
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
        this.push = value => {
            this.storage[this.count] = value;
            this.count++;
        };
        this.pop = () => {
            if (this.count === 0) {
                return undefined;
            }
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };
        this.size = () => this.count;
        this.peek = () => this.storage[this.count - 1];
    }
    ;
}
var myStack = new Stack();
class mySet {
    constructor() {
        this.collection = [];
        this.has = el => this.collection.indexOf(el) !== -1;
        this.values = () => this.collection;
        this.add = el => {
            if (!this.has(el)) {
                this.collection.push(el);
                return true;
            }
            return false;
        };
        this.remove = el => {
            if (this.has(el)) {
                const index = this.collection.indexOf(el);
                this.collection.splice(index, 1);
            }
        };
        this.size = () => this.collection.length;
        this.union = (otherSet) => {
            const unionSet = new mySet();
            const firstSet = this.values();
            const secondSet = otherSet.values();
            firstSet.forEach(e => unionSet.add(e));
            secondSet.forEach(e => unionSet.add(e));
            return unionSet;
        };
        this.intersection = (otherSet) => {
            const intersectionSet = new mySet();
            const firstSet = this.values();
            firstSet.forEach(e => {
                if (otherSet.has(e)) {
                    intersectionSet.add(e);
                }
            });
            return intersectionSet;
        };
        this.difference = (otherSet) => {
            const differenceSet = new mySet();
            const firstSet = this.values();
            firstSet.forEach(e => {
                if (!otherSet.has(e)) {
                    differenceSet.add(e);
                }
            });
            return differenceSet;
        };
        this.subset = (otherSet) => {
            const firstSet = this.values();
            return firstSet.every(v => otherSet.has(v));
        };
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
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node2(data);
            return;
        }
        else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node2(data);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node2(data);
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                else {
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
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = (node, data) => {
        };
    }
}
//# sourceMappingURL=file.js.map