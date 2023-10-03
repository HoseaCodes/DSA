/* 

Reorder List 

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return;

    // find the middle of linked list 
    // in 1->2->3->4->5->6 find 4 
    let slow = head;
    let fast = head;
    let prevLink = null;

    while (fast && fast.next) {
        prevLink = slow;
        slow = slow.next
        fast = fast.next.next 
    }
            
    // reverse the second part of the list 
    // convert 1->2->3->4->5->6 into 1->2->3->4 and 6->5->4
    // reverse the second half in-place
    let prev = null;
    let curr = slow;
    
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;   
    }

    if (prevLink) prevLink.next = prev;

    // merge two sorted linked lists
    // merge 1->2->3->4 and 6->5->4 into 1->6->2->5->3->4
    let first = head;
    let second = prev;
    let prevTemp = null

    while (second && first !== prev) {
        let tempNextFirst = first.next;
        let tempNextSecond = second.next;

        if (prevTemp) prevTemp.next = first;
        first.next = second;
        prevTemp = second;

        first = tempNextFirst;
        second = tempNextSecond;
    }
    

    return head;
};