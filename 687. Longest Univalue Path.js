/*

Given a binary tree, find the length of the longest path where each node in the path has the same value. 
This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.


Example 1:

    Input:

                5
                / \
                4   5
            / \   \
            1   1   5
    Output: 2

 

Example 2:

    Input:

                1
                / \
                4   5
            / \   \
            4   4   5
    Output: 2

 

Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    let sum = 0;
    
    let longestUnivaluePathRec = (root) => {
        if (!root) return 0;
        let left = longestUnivaluePathRec(root.left);
        let right = longestUnivaluePathRec(root.right);

        let leftAcc = 0;
        if (root.left && root.left.val == root.val) {
            leftAcc += left + 1;
        }

        let rightAcc = 0;
        if (root.right && root.right.val == root.val) {
            rightAcc += right + 1;
        }

        sum = Math.max(sum, leftAcc + rightAcc);
        return Math.max(leftAcc, rightAcc);
    }
    longestUnivaluePathRec(root);

    return sum; 
};

{
    let tree = new TreeNode(5);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(5);
    tree.left.left = new TreeNode(1);
    tree.left.right = new TreeNode(1);
    tree.right.right = new TreeNode(5);

    console.log(longestUnivaluePath(tree));
}

{
    let tree = new TreeNode(1);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(5);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(4);
    tree.right.right = new TreeNode(5);

    console.log(longestUnivaluePath(tree));
}