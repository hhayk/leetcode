/*

You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
    Input: Binary tree: [1,2,3,4]
        1
        /   \
        2     3
    /    
    4     

    Output: "1(2(4))(3)"

    Explanation: 
        Originallay it needs to be "1(2(4)())(3()())", 
        but you need to omit all the unnecessary empty parenthesis pairs. 
        And it will be "1(2(4))(3)".

Example 2:
    Input: Binary tree: [1,2,3,null,4]
        1
        /   \
        2     3
        \  
        4 

    Output: "1(2()(4))(3)"

    Explanation: 
        Almost the same as the first example, 
        except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    let str = "";

    let tree2strRec = (root) => {
        if (!root) return;

        str += root.val;
        if (root.left) {
            str += '('
            tree2strRec(root.left);
            str += ')'
        } else if (root.right) {
            str += '()';
        }
        if (root.right) {
            str += '('
            tree2strRec(root.right);
            str += ')'
        }
    }

    tree2strRec(t);
    return str;
};


{
    let node = null;

    console.log(tree2str(node));
}


{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(4);
    node.right = new TreeNode(3);

    console.log(tree2str(node));
}

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.right = new TreeNode(4);
    node.right = new TreeNode(3);

    console.log(tree2str(node));
}

