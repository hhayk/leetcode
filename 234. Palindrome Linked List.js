/*

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    while (arr.length > 1) {
        if (arr.shift() != arr.pop()) return false;
    }

    return true;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(2);

    console.log(isPalindrome(node));
}
{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(1);

    console.log(isPalindrome(node));
}