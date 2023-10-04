/********************************************************************************
Visual reference - https://www.cs.usfca.edu/~galles/visualization/StackArray.html  
 ********************************************************************************/

// Prototype for STACK
class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element: " + stack.peek()); // Output: Top element: 30
console.log("Stack size: " + stack.size());   // Output: Stack size: 3

stack.pop();
console.log("Popped element: " + stack.pop()); // Output: Popped element: 20
console.log("Stack size after pop: " + stack.size()); // Output: Stack size after pop: 1

stack.clear();
console.log("Stack is empty: " + stack.isEmpty()); // Output: Stack is empty: true