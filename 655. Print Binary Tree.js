/*

Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.
Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
Example 3:
Input:
      1
     / \
    2   5
   /
  3
 /
4
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
Note: The height of binary tree is in the range of [1, 10].

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
 * @return {string[][]}
 */
var printTree = function (root) {
    let treeHeight = (root) => {
        if (!root) return 0;
        return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
    }

    let height = treeHeight(root);
    let arr = new Array(height).fill("").map(_ => new Array((1 << height) - 1).fill(""));
    let queue = [[root, 0, 0, arr[0].length]];

    while (queue.length) {
        let [node, level, left, right] = queue.shift();

        let idx = ~~((left + right) / 2);
        arr[level][idx] = node.val.toString();

        if (node.left) queue.push([node.left, level + 1, left, ~~((left + right) / 2)]);
        if (node.right) queue.push([node.right, level + 1, ~~((left + right + 1) / 2), right]);
    }

    return arr;
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    console.log(printTree(node));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.right = new TreeNode(3);
    node.left.right = new TreeNode(4);
    console.log(printTree(node));
}
{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(3);
    node.left.left.left = new TreeNode(4);
    node.right = new TreeNode(5);
    console.log(printTree(node));
}