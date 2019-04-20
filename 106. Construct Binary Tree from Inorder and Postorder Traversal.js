/*

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let buildTreeRec = (left, right) => {
        if (left >= right) return null;

        let root = postorder.pop();
        let ii = inorder.indexOf(root);

        let node = new TreeNode(root);
        node.right = buildTreeRec(ii + 1, right);
        node.left = buildTreeRec(left, ii);

        return node;
    }

    return buildTreeRec(0, postorder.length);
};

{
    let inorder = [9, 3, 15, 20, 7];
    let postorder = [9, 15, 7, 20, 3];
    console.log(buildTree(inorder, postorder));
}

{
    let inorder = [1, 2, 3, 4];
    let postorder = [2, 1, 4, 3];
    console.log(buildTree(inorder, postorder));
}