/*

Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:


Return its postorder traversal as: [5,6,3,2,4,1].

 
Note:

Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorder = function (root) {
    let arr = [];

    let rec = (root) => {
        if (!root) return;
        if (root.children) root.children.forEach(node => rec(node));
        arr.push(root.val);
    }
    rec(root);

    return arr;
};

{
    let node = new Node(1);
    node.children = [new Node(3), new Node(2), new Node(4)];
    node.children[0].children = [new Node(5), new Node(6)];

    console.log(postorder(node));
}