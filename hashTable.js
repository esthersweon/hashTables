function HashTable() {
  // Set your HashTable's buckets and count
  this.buckets = [];
  this.count = 0;
}

// DO NOT WORRY ABOUT THIS FUNCTION
String.prototype.hashCode = function(){
  var max = 5; // hard-coded, for purposes of this exercise - will always give idx 0 ~ 4
  var hash = 0;
  if (this.length == 0) return hash;

  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }

  return Math.abs(max ? (hash % max) : hash);
};

HashTable.prototype.setItem = function(key, value) {
  // Format how you're going to store this new key/value pair 

  // Find the index at which this new key/value pair should be stored

  // Look at the bucket at that index (targetBucket)

  // IF targetBucket exists and already has stuff in it:

    // 1) Check if the key I want to save already exists in that bucket
    // If it does, change that key's value to the new value I'm passing in 
    // Return the HashTable's buckets to see the result of your insertion


    // 2) Otherwise, push this new key/value pair into this targetBucket and increment count
    // Return the HashTable's buckets to see the result of your insertion



  // ELSE (if targetBucket does not have any stuff in it), insert the new key/value pair
  // Increment count and return the HashTable's buckets to see the result of your insertion

}

HashTable.prototype.getItem = function(key) {
  // Find the index at which this key should be stored

  // Look at the bucket at that index (targetBucket)

  // IF targetBucket exists and already has stuff in it: 

    // Go through the key/value pairs in the bucket at this index 
    // Find the one where the key matches the key I'm looking for
    // Return that key/value pair's value

  // Otherwise, return error message if targetBucket doesn't exist or if key/value pair was not found in targetBucket

}

HashTable.prototype.removeItem = function(key) {
  // Find the index at which this key should be stored

  // Look at the bucket at that index (targetBucket)

  // IF targetBucket exists and already has stuff in it:
    // Go through the key/value pairs in the targetBucket 
    // Filter out the key/value pair where the key matches the key I'm looking for

    // If a key/value pair was removed, decrement count and return the HashTable's buckets to look at them after removal

  // Otherwise, return error message if targetBucket doesn't exist or if key/value pair was not found in targetBucket

}

HashTable.prototype.keys = function() {
  // Iterate through all your buckets
  // For each bucket, iterate through all key/value pairs and get the keys (0 idx value)

  // Return the keys

}

HashTable.prototype.values = function() {
  // Iterate through all your buckets
  // For each bucket, iterate through all key/value pairs and get the values (1 idx value)

  // Return the values

}

HashTable.prototype.clear = function() {
  // Clear your HashTable's buckets and set count back to 0


  // Return the whole HashTable to look at it after clearing

}

// EXAMPLE CODE TO RUN IN NODE REPL
// var myHashTable = new HashTable();
// myHashTable.setItem('Adam', 5);
// myHashTable.setItem('Bill', 10);
// myHashTable.setItem('Bill', 2);
// myHashTable.setItem('Carol', 6);
// myHashTable.setItem('Diane', 15);
// myHashTable.setItem('Esther', 8));

// myHashTable.getItem('Bill');
// myHashTable.getItem('Zoe'));

// myHashTable.removeItem('Diane');
// myHashTable.removeItem('Zoe'));

// myHashTable.keys();
// myHashTable.values());

// myHashTable.clear());