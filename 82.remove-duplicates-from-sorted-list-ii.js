/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (34.52%)
 * Likes:    1300
 * Dislikes: 98
 * Total Accepted:    226.1K
 * Total Submissions: 638.5K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Return the linked list sorted as well.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
 * 
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
 * @return {ListNode}
 * 思路一：和 83 不同的是要额外记录已经移除的节点，对比已经移除的节点和当前节点的值
 */
var deleteDuplicates = function(head) {
  let cur = head
  let prev
  let removed

  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      removed = cur.next
      cur.next = cur.next.next
    } else if (removed && cur.val === removed.val) {
      removed = cur
      if (prev) {
        prev.next = cur.next
      } else {
        head = cur.next
      }
      cur = cur.next
    } else {
      prev = cur
      cur = cur.next
    }

    if (removed && removed.next) {
      removed.next = null
    }
  }

  return head
}

// const a2l = require('./utils/arrayToLinkList')
// const l2a = require('./utils/linkListToArray')

// console.log(l2a(deleteDuplicates(a2l([1,1,1,2,3]))))
// @lc code=end

