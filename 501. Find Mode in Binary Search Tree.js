/*

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
 * @return {number[]}
 */
var findMode = function (root) {
    let map = new Map();
    let findModeRec = (root) => {
        if (!root) return null;

        let val = root.val;
        if (!map.has(val)) map.set(val, 0)
        map.set(val, map.get(val) + 1);

        findModeRec(root.left);
        findModeRec(root.right);
    }

    findModeRec(root);

    let mostFrequent = 0;
    for (let [key, value] of map.entries()) {
        mostFrequent = Math.max(mostFrequent, value);
    }

    let arr = [];
    for (let [key, value] of map.entries()) {
        if(value == mostFrequent) arr.push(key);
    }

    return arr;
};

{
    let node = new TreeNode(1);
    node.right = new TreeNode(2);
    node.right.left = new TreeNode(2);

    console.log(findMode(node));
}
{
    let node = new TreeNode(2147483647);

    console.log(findMode(node));
}