/*

Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

 



 

Return its preorder traversal as: [1,3,5,6,2,4].

 

Note:

Recursive solution is trivial, could you do it iteratively?

*/

function Node(val, children = []) {
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
 * @return {number[]}
 */
var preorder = function (root) {
    let arr = [];

    let rec = (root) => {
        if (!root) return;
        arr.push(root.val);
        for (let ch of root.children) rec(ch);
    }
    rec(root);

    return arr;
};

{
    let node = new Node(1);
    node.children[0] = new Node(3);
    node.children[1] = new Node(2);
    node.children[2] = new Node(4);
    node.children[0].children[0] = new Node(5);
    node.children[0].children[1] = new Node(6);

    console.log(preorder(node));
}