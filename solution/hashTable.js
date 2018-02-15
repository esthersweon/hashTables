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
  var bucketItem = [key, value];

	// Find the index at which this new key/value pair should be stored
  var index = key.hashCode();

  // Look at the bucket at that index (targetBucket)
  var targetBucket = this.buckets[index];

  // If targetBucket exists and already has stuff in it:
  // 1) Check if the key I want to save already exists in that bucket
  // 2) If it does, change that key's value to the new value I'm passing in
  // 3) Otherwise, push this new key/value pair into this targetBucket and increment count
  if (targetBucket && targetBucket.length) {
  	var keyAlreadyExistsInBucket = false;
    for (let i = 0; i < targetBucket.length; i++) {  
      if (targetBucket[i][0] === key) {
      	keyAlreadyExistsInBucket = true;
        targetBucket[i][1] = value;
      }
    } 

   	if (!keyAlreadyExistsInBucket) {
			targetBucket.push(bucketItem);
	  	this.count++
    }
  } 
  // Else (if targetBucket does not have any stuff in it), insert the new key/value pair
  // Increment count
  else {
  	this.buckets[index] = [bucketItem];
  	this.count++
  }

  // Return the HashTable's buckets to take a look at what you just inserted
  return this.buckets;
}

HashTable.prototype.getItem = function(key) {
	// Find the index at which this key should be stored
	let index = key.hashCode();

	// Go through the items in the bucket at this index 
	// Find the one where the key matches the key I'm looking for
	let bucketItem = this.buckets[index].find(bucketItem => bucketItem[0] === key);

	// Return that item's value
	return bucketItem[1];
}

HashTable.prototype.removeItem = function(key) {
	// Find the index at which this key should be stored
	let index = key.hashCode();

	// Go through the items in the bucket at this index 
	// Find the one where the key matches the key I'm looking for, and remove it
  this.buckets[index] = this.buckets[index].filter(bucketItem => bucketItem[0] !== key);

  // Decrement count
  this.count--;

  // Return the HashTable's buckets to take a look at what they are post-removal
  return this.buckets;
}

HashTable.prototype.keys = function() {
	// Iterate through all your buckets
	// For each bucket, iterate through all items and get the keys (0 idx value)
  var keys = [];
  for (var idx = 0; idx < this.buckets.length; idx++) {
    this.buckets[idx].forEach(bucketItem => {
    	keys.push(bucketItem[0]);
    });
  }

  // Return the keys
  return keys;
}

HashTable.prototype.values = function() {
	// Iterate through all your buckets
	// For each bucket, iterate through all items and get the values (1 idx value)
  var values = [];
  for (var idx = 0; idx < this.buckets.length; idx++) {
    this.buckets[idx].forEach(bucketItem => {
    	values.push(bucketItem[1]);
    });
  }

  // Return the values
  return values;
}

HashTable.prototype.clear = function() {
	// Clear your HashTable's buckets and set count back to 0
  this.buckets = [];
  this.count = 0;

  // Return the whole HashTable to take a look at it post-clearing
  return this;
}