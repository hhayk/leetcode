/*

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:


We should return its max depth, which is 3.

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.

*/

function Node(val, children) {
    this.val = val;
    this.children = children;
};


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;

    let maxDepthRec = (root, height) => {
        if (!root.children) return height;
        return root.children.reduce((pv, node) => Math.max(pv, maxDepthRec(node, height + 1)), height);
    }

    return maxDepthRec(root, 1);
};

{
    let node = new Node(1);
    node.children = [new Node(3), new Node(2), new Node(4)];
    node.children[0].children = [new Node(5), new Node(6)];
    console.log(maxDepth(node));
}