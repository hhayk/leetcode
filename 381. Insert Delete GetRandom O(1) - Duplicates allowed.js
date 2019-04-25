/*

Design a data structure that supports all following operations in average O(1) time.

Note: Duplicate elements are allowed.
insert(val): Inserts an item val to the collection.
remove(val): Removes an item val from the collection if present.
getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
Example:

// Init an empty collection.
RandomizedCollection collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1);

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1);

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2);

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom();

// Removes 1 from the collection, returns true. Collection now contains [1,2].
collection.remove(1);

// getRandom should return 1 and 2 both equally likely.
collection.getRandom();

*/

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
    this.map = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    let hasVal = this.map.has(val);
    this.map.set(val, [...(this.map.get(val) || []), val]);

    console.log(!hasVal);
    return !hasVal;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    let hasVal = this.map.has(val) && this.map.get(val).length > 0;
    if (hasVal) this.map.set(val, this.map.get(val).filter((_, i) => i > 0));

    console.log(hasVal);
    return hasVal;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    let flatten = [].concat.apply([], [...this.map.values()]);
    let idx = Math.floor(Math.random() * flatten.length);
    return flatten[idx];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// {
//     let collection = new RandomizedCollection();
//     collection.insert(1);
//     collection.insert(1);
//     collection.insert(2);
//     collection.getRandom();
//     collection.remove(1);
//     collection.getRandom();
// }

{
    let collection = new RandomizedCollection();
    collection.insert(0);
    collection.remove(0);
    collection.insert(-1);
    collection.remove(0);
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
    collection.getRandom();
}