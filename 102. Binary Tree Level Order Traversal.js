/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
    [
        [3],
        [9,20],
        [15,7]
    ]

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let acc = [];
    let stack = [];

    stack.push([root, 0]);
    while (stack.length > 0) {
        let tuple = stack.shift();
        let [node, level] = tuple;

        if (!acc[level]) acc[level] = [];
        acc[level].push(node.val);

        if (node.left) stack.push([node.left, level + 1]);
        if (node.right) stack.push([node.right, level + 1]);
    }

    return acc;
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(9);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    node.right.right = new TreeNode(7);

    console.log(levelOrder(node));
}