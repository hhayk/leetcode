/*

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13

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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let arr = [];
    let traverse = (root) => {
        if (!root) return root;
        traverse(root.right);
        let val = root.val;
        root.val += arr.reduce((a, b) => a + b, 0);
        arr.push(val);
        traverse(root.left);
        return root;
    }

    return traverse(root);
};

{
    let node = new TreeNode(5);
    node.left = new TreeNode(2);
    node.right = new TreeNode(13);
    console.log(convertBST(node));
}
{
    let node = null;
    console.log(convertBST(node));
}