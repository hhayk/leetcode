/*

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

    Input:     1         1
            / \       / \
            2   3     2   3

            [1,2,3],   [1,2,3]

    Output: true

Example 2:

    Input:     1         1
            /           \
            2             2

            [1,2],     [1,null,2]

    Output: false

Example 3:

    Input:     1         1
            / \       / \
            2   1     1   2

            [1,2,1],   [1,1,2]

    Output: false

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let isSameTreeRec = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val == q.val && isSameTreeRec(p.left, q.left) && isSameTreeRec(p.right, q.right);
    }

    return isSameTreeRec(p, q);
};

{
    let node1 = new TreeNode(1);
    node1.left = new TreeNode(2);
    node1.right = new TreeNode(3);

    let node2 = new TreeNode(1);
    node2.left = new TreeNode(2);
    node2.right = new TreeNode(3);

    console.log(isSameTree(node1, node2));
}

{
    let node1 = new TreeNode(1);
    node1.left = new TreeNode(1);
    node1.right = new TreeNode(1);

    let node2 = new TreeNode(1);
    node2.left = new TreeNode(1);
    node2.right = new TreeNode(2);

    console.log(isSameTree(node1, node2));
}