/*

Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Note:

Both of the given trees will have between 1 and 100 nodes.

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let leafSimilarRec = (root, acc) => {
        if (!root) return null;
        if (!root.left && !root.right) acc.push(root.val);

        leafSimilarRec(root.left, acc);
        leafSimilarRec(root.right, acc);
    }

    let acc1 = [];
    leafSimilarRec(root1, acc1);
    let acc2 = [];
    leafSimilarRec(root2, acc2);

    if (acc1.length != acc2.length) return false;
    for (let i = 0; i < acc1.length; i++) if (acc1[i] != acc2[i]) return false;
    return true;
};

{
    let node1 = new TreeNode(3);
    node1.left = new TreeNode(5);
    node1.left.left = new TreeNode(6);
    node1.left.right = new TreeNode(2);
    node1.left.right.left = new TreeNode(7);
    node1.left.right.right = new TreeNode(4);
    node1.right = new TreeNode(1);
    node1.right.left = new TreeNode(9);
    node1.right.right = new TreeNode(8);

    let node2 = new TreeNode(3);
    node2.left = new TreeNode(5);
    node2.left.left = new TreeNode(6);
    node2.left.right = new TreeNode(2);
    node2.left.right.left = new TreeNode(7);
    node2.left.right.right = new TreeNode(4);
    node2.right = new TreeNode(1);
    node2.right.left = new TreeNode(9);
    node2.right.right = new TreeNode(8);

    console.log(leafSimilar(node1, node2));
}