class MyHashMap {
    constructor() {
        // Initialize the size of the hash table.
        this.SIZE = 1000;
        // Create an array to serve as the buckets.
        this.buckets = new Array(this.SIZE);
    }

    // Hashing function to map keys to an index in the array.
    getHash(key) {
        return key % this.SIZE;
    }

    // Insert a key-value pair into the hash map.
    put(key, value) {
        // Calculate the hash value for the key.
        const hashValue = this.getHash(key);
        // Retrieve the bucket at the hashed index.
        const bucket = this.buckets[hashValue];
        // If the bucket doesn't exist, create it.
        if (!bucket) {
            this.buckets[hashValue] = [];
        }
        let found = false;
        // Search for the key in the bucket.
        for (let i = 0; i < this.buckets[hashValue].length; i++) {
            if (bucket[i][0] === key) {
                // If the key is found, update its value.
                found = true;
                this.buckets[hashValue][i][1] = value;
            }
        }
        // If the key is not found, add it to the bucket.
        if (!found) {
            this.buckets[hashValue].push([key, value]);
        }
    }

    // Get the value associated with a key.
    get(key) {
        // Calculate the hash value for the key.
        const hashValue = this.getHash(key);
        // Retrieve the bucket at the hashed index.
        const bucket = this.buckets[hashValue];
        // If the bucket doesn't exist, the key is not in the map.
        if (!bucket) {
            return -1;
        }
        // Search for the key in the bucket.
        for (const [k, v] of bucket) {
            if (k === key) {
                // If the key is found, return its value.
                return v;
            }
        }
        // If the key is not found in the bucket, it's not in the map.
        return -1;
    }

    // Remove a key and its associated value from the hash map.
    remove(key) {
        // Calculate the hash value for the key.
        const hashValue = this.getHash(key);
        // Retrieve the bucket at the hashed index.
        const bucket = this.buckets[hashValue];
        // If the bucket doesn't exist, the key is not in the map.
        if (!bucket) {
            return;
        }
        // Search for the key in the bucket.
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                // If the key is found, remove it from the bucket.
                this.buckets[hashValue].splice(i, 1);
                break;
            }
        }
    }
}

// Create an instance of MyHashMap
const myHashMap = new MyHashMap();

// Insert key-value pairs into the hash map
myHashMap.put(1, 10);  // Insert (1, 10)
myHashMap.put(2, 20);  // Insert (2, 20)
myHashMap.put(3, 30);  // Insert (3, 30)

// Get values by keys
console.log("Value for key 1:", myHashMap.get(1)); // Output: Value for key 1: 10 (value associated with key 1)
console.log("Value for key 2:", myHashMap.get(2)); // Output: Value for key 2: 20 (value associated with key 2)
console.log("Value for key 4:", myHashMap.get(4)); // Output: Value for key 4: -1 (key 4 doesn't exist in the map)

// Update an existing key-value pair
myHashMap.put(2, 25);  // Update the value for key 2 to 25

// Get the updated value
console.log("Updated value for key 2:", myHashMap.get(2)); // Output: Updated value for key 2: 25 (updated value associated with key 2)

// Remove a key-value pair
myHashMap.remove(3); // Remove key 3 and its value

// Attempt to get the removed key's value
console.log("Value for removed key 3:", myHashMap.get(3)); // Output: Value 