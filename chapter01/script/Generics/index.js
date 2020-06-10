"use strict";
class QueueOfInt {
    constructor() {
        this.queue = [];
    }
    Push(value) {
        this.queue.push(value);
    }
    Pop() {
        return this.queue.shift();
    }
}
const intQueue = new QueueOfInt();
intQueue.Push(10);
intQueue.Push(20);
console.log(intQueue.Pop());
console.log(intQueue.Pop());
console.log(intQueue.Pop());
class Queue {
    constructor() {
        this.queue = [];
    }
    Push(value) {
        this.queue.push(value);
    }
    Pop() {
        return this.queue.shift();
    }
}
const queue = new Queue();
const stringQueue = new Queue();
queue.Push(10);
queue.Push(20);
console.log(queue.Pop());
console.log(queue.Pop());
console.log(queue.Pop());
stringQueue.Push("Hello");
stringQueue.Push("World");
console.log(stringQueue.Pop());
//# sourceMappingURL=index.js.map