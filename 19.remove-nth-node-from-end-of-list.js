/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.62%)
 * Likes:    2673
 * Dislikes: 194
 * Total Accepted:    537.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 思路，取两个指针，相隔 n个节点，当后面的指针到达末尾了，
 * 前面的指针指到的节点的后一个节点就是要移除的节点
 */
var removeNthFromEnd = function(head, n) {
    let front
    let back = head

    while (back.next) {
      if (front) {
        front = front.next
      }
      back = back.next
      n -= 1
      if (n === 0) {
        front = head
      }
    }

    if (front == null) {
      if (n === 1) {
        const tmpNext = head.next
        head.next = null
        return tmpNext
      }
      return head
    }

    front.next = front.next ? front.next.next : null
    return head
};

// const a2l = require('./utils/arrayToLinkList')
// const l2a = require('./utils/linkListToArray')

// console.log(l2a(removeNthFromEnd(a2l([1,2,3,4,5,6]), 6)))
// @lc code=end

