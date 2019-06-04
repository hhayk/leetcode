/*

Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

 

Example 1:



Input: [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation: 
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).
Example 2:



Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation: 
The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
 

Note:

The tree will have between 1 and 1000 nodes.
Each node's value will be between 0 and 1000.

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function Loc(val, vert, depth) {
    this.val = val;
    this.vert = vert;
    this.depth = depth;
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
var verticalTraversal = function (root) {
    let len = Math.ceil(Math.log2(1000)) * 2;
    let arr = [];
    let ret = [];

    let traverse = (root, vert, depth) => {
        if (!root) return;

        arr.push(new Loc(root.val, vert, depth));

        traverse(root.left, vert - 1, depth + 1);
        traverse(root.right, vert + 1, depth + 1);
    }
    traverse(root, len / 2, 0);
    arr.sort((a, b) => {
        if (a.vert != b.vert) return a.vert - b.vert;
        return a.depth == b.depth ? a.val - b.val : a.depth - b.depth;
    })

    for (let loc of arr) {
        if (!ret[loc.vert]) ret[loc.vert] = [];
        ret[loc.vert].push(loc.val);
    }

    return ret.filter(ar => arr.length);
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(9);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    node.right.right = new TreeNode(7);

    console.log(verticalTraversal(node));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(4);
    node.left.right = new TreeNode(5);
    node.right = new TreeNode(3);
    node.right.left = new TreeNode(6);
    node.right.right = new TreeNode(7);

    console.log(verticalTraversal(node));
}