/*

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let obj = {};
    let isCousinsRec = (root, level, parent) => {
        if (!root) return;
        let val = root.val;

        if (val == x) obj[x] = { level, parent };
        if (val == y) obj[y] = { level, parent };

        isCousinsRec(root.left, level + 1, val);
        isCousinsRec(root.right, level + 1, val);
    }

    isCousinsRec(root, 0);

    let a = obj[x];
    let b = obj[y];
    return a && b && a.level == b.level && a.parent != b.parent;
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(4);
    node.right = new TreeNode(3);
    console.log(isCousins(node, 4, 3));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.right = new TreeNode(4);
    node.right = new TreeNode(3);
    node.right.right = new TreeNode(5);
    console.log(isCousins(node, 5, 4));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.right = new TreeNode(4);
    node.right = new TreeNode(3);
    console.log(isCousins(node, 2, 3));
}