/********************************************************************************
Visual reference - https://www.cs.usfca.edu/~galles/visualization/StackLL.html
 ********************************************************************************/

// Prototype for NODE
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Prototype for STACK
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Push an element onto the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Pop an element from the stack
    pop() {
        if (!this.isEmpty()) {
            const poppedNode = this.top;
            this.top = this.top.next;
            this.size--;
            return poppedNode.data;
        }
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    // Clear the stack
    clear() {
        this.top = null;
        this.size = 0;
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element: " + stack.peek()); // Output: Top element: 30
console.log("Stack size: " + stack.getSize());   // Output: Stack size: 3

stack.pop();
console.log("Popped element: " + stack.pop()); // Output: Popped element: 20
console.log("Stack size after pop: " + stack.getSize()); // Output: Stack size after pop: 1

stack.clear();
console.log("Stack is empty: " + stack.isEmpty()); // Output: Stack is empty: true