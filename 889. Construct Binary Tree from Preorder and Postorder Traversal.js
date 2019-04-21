/*

Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

Example 1:

    Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
    Output: [1,2,3,4,5,6,7]
    
Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.

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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
    let buildTreeRec = (i0, i1, N) => {
        if (N == 0) return null;
        let root = new TreeNode(pre[i0]);
        if (N == 1) return root;

        let L = 1;
        for (; L < N; ++L)
            if (post[i1 + L - 1] == pre[i0 + 1])
                break;

        root.left = buildTreeRec(i0 + 1, i1, L);
        root.right = buildTreeRec(i0 + L + 1, i1 + L, N - 1 - L);
        return root;
    }

    return buildTreeRec(0, 0, pre.length);
};

// console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
let res = constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
let rec = (node) => {
    if (!node) return null;

    console.log(node.val);
    rec(node.left);
    rec(node.right);
}
rec(res);

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);

