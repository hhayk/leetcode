/*

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let i = 0;
    let maxLen = 0;

    while (true) {
        let tmp = head;
        let len = 0;

        while (tmp && tmp.next) {
            if (tmp.val > tmp.next.val) {
                let tmpVal = tmp.val;
                tmp.val = tmp.next.val;
                tmp.next.val = tmpVal;
            }
            tmp = tmp.next;
            len++;
        }

        maxLen = len;
        if (i++ > Math.log2(maxLen) + 1) break;
    }

    return head;
};

{
    let node = new ListNode(4);
    node.next = new ListNode(2);
    node.next.next = new ListNode(1);
    node.next.next.next = new ListNode(3);
    console.log(sortList(node));
}

{
    let node = new ListNode(6);
    node.next = new ListNode(5);
    node.next.next = new ListNode(4);
    node.next.next.next = new ListNode(3);
    node.next.next.next.next = new ListNode(0);
    console.log(sortList(node));
}