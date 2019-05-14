/*

Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

 

Example 1:

Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Note:

The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.

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
var sumRootToLeaf = function (root) {
    let sum = 0;

    let sumRootToLeafRec = (root, path) => {
        if (!root) return;

        let tmp = [...path, root.val];

        if (!root.left && !root.right) {
            sum += Number.parseInt(tmp.join(""), 2);
        } else {
            sumRootToLeafRec(root.left, tmp);
            sumRootToLeafRec(root.right, tmp);
        }
    }

    sumRootToLeafRec(root, []);
    return sum;
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(0);
    node.left.left = new TreeNode(0);
    node.left.right = new TreeNode(1);
    node.right = new TreeNode(1);
    node.right.left = new TreeNode(0);
    node.right.right = new TreeNode(1);

    console.log(sumRootToLeaf(node));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(1);

    console.log(sumRootToLeaf(node));
}