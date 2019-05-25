/*

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];

    let res = [];
    let queue = [{ node: root, depth: 0 }];
    while (queue.length > 0) {
        let { node, depth } = queue.shift();
        if (node.left) queue.push({ node: node.left, depth: depth + 1 });
        if (node.right) queue.push({ node: node.right, depth: depth + 1 });

        if (!res[depth]) res[depth] = [];
        res[depth].push(node.val);
    }

    return res.map(arr => Math.max(...arr));
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(3);
    node.left.left = new TreeNode(5);
    node.left.right = new TreeNode(3);
    node.right = new TreeNode(2);
    node.right.right = new TreeNode(9);
    console.log(largestValues(node));
}
{
    let node = null;
    console.log(largestValues(node));
}