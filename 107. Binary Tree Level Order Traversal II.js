/*

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function (root) {
    let acc = [];

    let levelOrderBottomRec = (root, level) => {
        if (!root) return;
        else {
            acc[level] = acc[level] || [];
            acc[level].push(root.val);

            levelOrderBottomRec(root.left, level + 1, acc);
            levelOrderBottomRec(root.right, level + 1, acc);
        }
    }

    levelOrderBottomRec(root, 0);
    return acc.reverse();
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(9);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    node.right.right = new TreeNode(7);

    console.log(levelOrderBottom(node));
}