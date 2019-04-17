/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8

Explanation: 342 + 465 = 807.

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // let node = null;
    // let temp = null;
    // let carry = 0;

    // while (l1 || l2) {
    //     let v1 = l1 ? l1.val : 0;
    //     let v2 = l2 ? l2.val : 0;
    //     let sum = v1 + v2 + carry;
    //     let ss = sum % 10;
    //     carry = Math.floor(sum / 10);

    //     if (node == null) {
    //         node = new ListNode(ss);
    //         temp = node;
    //     } else {
    //         let newNode = new ListNode(ss);
    //         temp.next = newNode;
    //         temp = newNode;
    //     }

    //     if (l1) l1 = l1.next;
    //     if (l2) l2 = l2.next;
    // }
    // if(carry > 0) temp.next = new ListNode(carry);

    // return node;

    let addTwoNumbersRec = (l1, l2, carry) => {
        if (!l1 && !l2) {
            if (carry > 0) return new ListNode(carry);
            else return null;
        } else {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;
            let n1 = l1 ? l1.next : null;
            let n2 = l2 ? l2.next : null;

            let sum = v1 + v2 + carry;
            let node = new ListNode(sum % 10);
            node.next = addTwoNumbersRec(n1, n2, Math.floor(sum / 10));
            return node;
        }
    }

    return addTwoNumbersRec(l1, l2, 0);
};

{
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(6);

    console.log(addTwoNumbers(l1, l2));
}

{
    let l1 = new ListNode(1);
    l1.next = new ListNode(8);

    let l2 = new ListNode(0);

    console.log(addTwoNumbers(l1, l2));
}