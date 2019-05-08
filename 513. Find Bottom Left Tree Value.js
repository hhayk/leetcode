/*

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.

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
var findBottomLeftValue = function (root) {
    let obj = { level: -1, val: 0 };

    let findBottomLeftValueRec = (root, level) => {
        if (!root) return;
        if (root && !root.left && !root.right) {
            if (level > obj.level) {
                let val = root.val;
                obj = { level, val };
            }
            return;
        }

        findBottomLeftValueRec(root.left, level + 1);
        findBottomLeftValueRec(root.right, level + 1);
    }

    findBottomLeftValueRec(root, 0);
    return obj.val;
};

{
    let node = new TreeNode(1);
    console.log(findBottomLeftValue(node));
}
{
    let node = new TreeNode(1);
    node.right = new TreeNode(1);
    console.log(findBottomLeftValue(node));
}
{
    let node = new TreeNode(0);
    node.right = new TreeNode(-1);
    console.log(findBottomLeftValue(node));
}
{
    let node = new TreeNode(2);
    node.left = new TreeNode(1);
    node.right = new TreeNode(3);
    console.log(findBottomLeftValue(node));
}
{
    let node = new TreeNode(2);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(4);
    node.right = new TreeNode(3);
    node.right.left = new TreeNode(5);
    node.right.right = new TreeNode(6);
    node.right.left.left = new TreeNode(7);
    console.log(findBottomLeftValue(node));
}