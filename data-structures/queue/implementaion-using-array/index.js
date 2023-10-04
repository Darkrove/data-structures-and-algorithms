/********************************************************************************
Visual reference - https://www.cs.usfca.edu/~galles/visualization/QueueArray.html
 ********************************************************************************/

// Prototype for QUEUE
class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue an element from the queue
    dequeue() {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
    }

    // Peek at the front element of the queue without removing it
    front() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element: " + queue.front()); // Output: Front element: 10
console.log("Queue size: " + queue.size());     // Output: Queue size: 3

queue.dequeue();
console.log("Dequeued element: " + queue.dequeue()); // Output: Dequeued element: 10
console.log("Queue size after dequeue: " + queue.size()); // Output: Queue size after dequeue: 1

queue.clear();
console.log("Queue is empty: " + queue.isEmpty()); // Output: Queue is empty: true