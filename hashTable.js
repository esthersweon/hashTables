function HashTable() {
  // Set your HashTable's buckets and count
  this.buckets = [];
  this.count = 0;
}

String.prototype.hashCode = function(){
  var max = 5; // hard-coded, for purposes of this exercise - will always give index 0 ~ 4
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

  // If targetBucket exists and already has stuff in it:
  // 1) Check if the key I want to save already exists in that bucket
  // 2) If it does, change that key's value to the new value I'm passing in
  // 3) Otherwise, push this new key/value pair into this targetBucket and increment count
  


  // Else (if targetBucket does not have any stuff in it), insert the new key/value pair
  // Increment count



  // Return the HashTable's buckets to take a look at what you just inserted

}

HashTable.prototype.getItem = function(key) {
  // Find the index at which this key should be stored

  // Go through the items in the bucket at this index 
  // Find the one where the key matches the key I'm looking for

  // Return that item's value
}

HashTable.prototype.removeItem = function(key) {
  // Find the index at which this key should be stored

  // Go through the items in the bucket at this index 
  // Find the one where the key matches the key I'm looking for, and remove it

  // Decrement count

  // Return the HashTable's buckets to take a look at what they are post-removal
}

HashTable.prototype.keys = function() {
  // Iterate through all your buckets
  // For each bucket, iterate through all items and get the keys (0 idx value)

  // Return the keys
}

HashTable.prototype.values = function() {
  // Iterate through all your buckets
  // For each bucket, iterate through all items and get the values (1 idx value)

  // Return the values
}

HashTable.prototype.clear = function() {
  // Clear your HashTable's buckets and set count back to 0

  // Return the whole HashTable to take a look at it post-clearing
}