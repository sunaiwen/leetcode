/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (36.46%)
 * Likes:    1844
 * Dislikes: 121
 * Total Accepted:    243.2K
 * Total Submissions: 651.6K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 * 思路一：设三个指针，分别指向开始节点的前一个节点、开始节点、开始节点的后一个节点。
 * 如果 m 不等于 1，那就要去到第 m 个节点。然后就遍历，直到遍历到第 n 个节点停止。
 */
var reverseBetween = function(head, m, n) {
  let beforeStartPoint
  let startPoint
  let tmp = head

  let i = 1
  if (m === 1) {
    startPoint = head
  } else {
    for (; i !== m; i++) {
      if (i === m -1) {
        beforeStartPoint = tmp
        startPoint = beforeStartPoint.next
      }
      tmp = tmp.next
    }
  }

  let prev = beforeStartPoint
  let cur = startPoint
  let next = startPoint.next

  for (; i <=n; i++) {
    cur.next = prev
    prev = cur
    cur = next
    if (cur) {
      next = cur.next
    } else {
      next = null
    }
  }

  startPoint.next = cur
  if (beforeStartPoint) {
    beforeStartPoint.next = prev
    return head
  }

  return prev
};

// // @lc code=end

