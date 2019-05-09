/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if(this.stack.length == 0) return this.top();

    let min = Number.MAX_VALUE;
    for (let n of this.stack) min = Math.min(min, n);

    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

{
    let minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    let v1 = minStack.getMin(); //--> Returns - 3.
    minStack.pop();
    let v2 = minStack.top(); //--> Returns 0.
    let v3 = minStack.getMin(); //--> Returns - 2.

    console.log(v1, v2, v3);
}