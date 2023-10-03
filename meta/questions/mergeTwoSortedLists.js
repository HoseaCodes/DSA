/*
Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let outputList = new ListNode();
    let selectedNode = outputList;
    let tempNode;
    while (true) {
        if (list1 && list2 && list1.val <= list2.val || list1 && list2 == undefined) {
            selectedNode.next = list1;
            list1 = list1.next;
        } else if (list1 && list2 || list2 && list1 == undefined) {
            selectedNode.next = list2;
            list2 = list2.next;
        } else {
            break;
        }
        selectedNode = selectedNode.next;
    }
    return outputList.next;
};