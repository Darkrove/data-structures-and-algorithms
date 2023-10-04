/********************************************************************************
Visual reference - https://www.cs.usfca.edu/~galles/visualization/QueueLL.html
 ********************************************************************************/

// Prototype for NODE
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Prototype for QUEUE
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Enqueue an element to the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Dequeue an element from the queue
    dequeue() {
        if (!this.isEmpty()) {
            const dequeuedNode = this.front;
            this.front = this.front.next;
            this.size--;
            return dequeuedNode.data;
        }
    }

    // Get front element of the queue without removing it
    getFront() {
        if (!this.isEmpty()) {
            return this.front.data;
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }

    // Clear the queue
    clear() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
}


// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element: " + queue.getFront()); // Output: Front element: 10
console.log("Queue size: " + queue.getSize());     // Output: Queue size: 3

queue.dequeue();
console.log("Dequeued element: " + queue.dequeue()); // Output: Dequeued element: 10
console.log("Queue size after dequeue: " + queue.getSize()); // Output: Queue size after dequeue: 1

queue.clear();
console.log("Queue is empty: " + queue.isEmpty()); // Output: Queue is empty: true