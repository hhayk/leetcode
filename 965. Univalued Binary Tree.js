/*


A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.
 

Example 1:


    Input: [1,1,1,1,1,null,1]
    Output: true

Example 2:


    Input: [2,2,2,5,2]
    Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    let isUnivalTreeRec = (root, val) => {
        if (!root) return true;
        return root.val == val && isUnivalTreeRec(root.left, val) && isUnivalTreeRec(root.right, val);
    }

    return isUnivalTreeRec(root, root.val || 0);
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(1);
    node.left.left = new TreeNode(1);
    node.left.right = new TreeNode(1);
    node.right = new TreeNode(1);
    node.right.right = new TreeNode(5);
    console.log(isUnivalTree(node));
}