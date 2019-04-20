/*

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

    Input: [1,null,2,3]
    1
        \
        2
        /
    3

    Output: [1,3,2]

Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // let acc = [];

    // let inorderTraversal = (root) => {
    //     if (root) {
    //         inorderTraversal(root.left);
    //         acc.push(root.val);
    //         inorderTraversal(root.right);
    //     }
    // }
    // inorderTraversal(root);

    // return acc;

    let acc = [];
    let stack = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            acc.push(root.val);
            root = root.right;
        }
    }

    return acc;
};

{
    let node = new TreeNode(1);
    node.right = new TreeNode(2);
    node.right.left = new TreeNode(3);
    console.log(inorderTraversal(node));
}