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
  var myPair = [key, value];

  // Find the index at which this new key/value pair should be stored
  var idxOfBucket = key.hashCode();

  // Look at the bucket at that index (targetBucket)
  var targetBucket = this.buckets[idxOfBucket];

  // IF targetBucket exists and already has stuff in it:
  if (targetBucket && targetBucket.length > 0) {

    // 1) Check if the key I want to save already exists in that bucket
    // If it does, change that key's value to the new value I'm passing in 
    // Return the HashTable's buckets to see the result of your insertion
    for (var i = 0; i < targetBucket.length; i++) {
      var eachKeyValPair = targetBucket[i];

      if (eachKeyValPair[0] === key) {
        eachKeyValPair[1] = value;
        return this.buckets; // exit out, i am done setting the value
      }
    }

    // 2) Otherwise, push this new key/value pair into this targetBucket and increment count
    // Return the HashTable's buckets to see the result of your insertion
    targetBucket.push(myPair);
    this.count += 1
    return this.buckets;
  }


  // ELSE (if targetBucket does not have any stuff in it), insert the new key/value pair
  // Increment count and return the HashTable's buckets to see the result of your insertion
  else {
    this.buckets[idxOfBucket] = [ myPair ];
    this.count += 1;
    return this.buckets;
  }
}

HashTable.prototype.getItem = function(key) {
  // Find the index at which this key should be stored
  var idxOfBucketToLookIn = key.hashCode();

  // Look at the bucket at that index (targetBucket)
  var targetBucket = this.buckets[idxOfBucketToLookIn];

  // IF targetBucket exists and already has stuff in it: 
  if (targetBucket && targetBucket.length > 0) {
    // Go through the key/value pairs in the bucket at this index 
    for (var i = 0; i < targetBucket.length; i++) {
      var eachKeyValPair = targetBucket[i];

      // Find the one where the key matches the key I'm looking for
      // Return that key/value pair's value
      if (eachKeyValPair[0] === key) {
        return eachKeyValPair[1];
      }
    }
  }

  // Otherwise, return error message if targetBucket doesn't exist or if key/value pair was not found in targetBucket
  return `${ key } does not exist in hash table – could not get.`;
}

HashTable.prototype.removeItem = function(key) {
  // Find the index at which this key should be stored
  var idxOfBucketToLookIn = key.hashCode();

  // Look at the bucket at that index (targetBucket)
  var targetBucket = this.buckets[idxOfBucketToLookIn];

  // IF targetBucket exists and already has stuff in it:
  if (targetBucket && targetBucket.length > 0) {
    // Go through the key/value pairs in the targetBucket 
    // Filter out the key/value pair where the key matches the key I'm looking for
    newTargetBucket = targetBucket.filter(eachKeyValPair => {
      return eachKeyValPair[0] !== key;
    });

    // If a key/value pair was removed, decrement count and return the HashTable's buckets to look at them after removal
    if (newTargetBucket.length < targetBucket.length) {
      this.buckets[idxOfBucketToLookIn] = newTargetBucket;
      this.count -= 1;
      return this.buckets;
    }
  }

  // Otherwise, return error message if targetBucket doesn't exist or if key/value pair was not found in targetBucket
  return `${ key } does not exist in hash table – could not remove.`;
}

HashTable.prototype.keys = function() {
  var keys = [];

  // Iterate through all your buckets
  this.buckets.forEach(eachBucket => {

    // For each bucket, iterate through all key/value pairs and get the keys (0 idx value)
    eachBucket.forEach(eachKeyValPair => {
      keys.push(eachKeyValPair[0]);
    })
  });

  // Return the keys
  return keys;
}

HashTable.prototype.values = function() {
  var values = [];

  // Iterate through all your buckets
  this.buckets.forEach(eachBucket => {

    // For each bucket, iterate through all key/value pairs and get the values (1 idx value)
    eachBucket.forEach(eachKeyValPair => {
      values.push(eachKeyValPair[1]);
    })
  });

  // Return the values
  return values;
}

HashTable.prototype.clear = function() {
  // Clear your HashTable's buckets and set count back to 0
  this.buckets = [];
  this.count = 0;

  // Return the whole HashTable to look at it after clearing
  return this;
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