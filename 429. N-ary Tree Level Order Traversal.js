/*

Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:

We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
 

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.

*/

function Node(val, children) {
    this.val = val;
    this.children = children;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let ret = [];
    let queue = [[root]];

    while (queue.length) {
        let tmp = [];
        let arr = [];

        queue.shift().forEach(node => {
            tmp.push(node.val);
            if (node.children) arr.push(...node.children);
        })

        ret.push(tmp);
        if (arr.length) queue.push(arr);
    }

    return ret;
};

{
    let node = new Node(1);
    node.children = [new Node(3), new Node(2), new Node(4)];
    node.children[0].children = [new Node(5), new Node(6)];
    console.log(levelOrder(node));
}
{
    let node = null;
    console.log(levelOrder(node));
}