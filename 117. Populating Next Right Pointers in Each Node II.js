/*

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example:



Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
 

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.

*/

function Node(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
};

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null;

    let stack = [[root, 0]];
    let arr = [];

    while (stack.length) {
        let [node, level] = stack.shift();
        if (!arr[level]) arr[level] = [];

        arr[level].push(node);

        if (node.left) stack.push([node.left, level + 1]);
        if (node.right) stack.push([node.right, level + 1]);
    }

    for (let inLevelNodes of arr) {
        for (let i = 0; i < inLevelNodes.length; i++) {
            inLevelNodes[i].next = inLevelNodes[i + 1] || null;
        }
    }

    return root;
};

{
    let node = new Node(1);
    node.left = new Node(2);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    node.right = new Node(3);
    node.right.right = new Node(7);

    console.log(connect(node));
}