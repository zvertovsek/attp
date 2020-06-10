class QueueOfInt {
    private queue: number[] = [];

    public Push(value: number): void {
        this.queue.push(value);
    }

    public Pop(): number | undefined {
        return this.queue.shift();
    }
}

const intQueue: QueueOfInt = new QueueOfInt();

intQueue.Push(10);
intQueue.Push(20);
console.log(intQueue.Pop());
console.log(intQueue.Pop());
console.log(intQueue.Pop());


class Queue<T> {
    private queue: T[] = [];

    public Push(value: T): void {
        this.queue.push(value);
    }

    public Pop(): T | undefined {
        return this.queue.shift();
    }
}


const queue: Queue<number> = new Queue<number>();
const stringQueue: Queue<string> = new Queue<string>();

queue.Push(10);
queue.Push(20);
console.log(queue.Pop());
console.log(queue.Pop())
console.log(queue.Pop())

stringQueue.Push("Hello");
stringQueue.Push("World");
console.log(stringQueue.Pop());
