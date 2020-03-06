/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (33.01%)
 * Likes:    1421
 * Dislikes: 98
 * Total Accepted:    200.1K
 * Total Submissions: 580.4K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * Example 1:
 * 
 * 
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * 
 * 
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 * 思路：把链表分割成两半，reverse 第二半，然后再拼合两半链表。
 * 中点分割点，如果长度是奇数，前部分比后部分多一个 node。
 * 
 * 如下图：
 *  1---2---3
 *    4---5
 * 
 *  相间着对准，然后拼合。
 */
var reorderList = function(head) {
  if (head == null) {
    return head
  }

  if (head.next == null || head.next.next == null) {
    return head
  }
  let cnt = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    cnt += 1
  }

  let mid = Math.ceil(cnt / 2)
  let midNode
  cur = head

  for (let i = 1; i !== mid; i++) {
    cur = cur.next
  }
  midNode = cur.next
  cur.next = null
  midNode = reverse(midNode)

  cur = head
  for (let i = mid + 1; i <= cnt; i++) {
    let tmpNext

    if (cur) {
      tmpNext = cur.next
      cur.next = midNode
    }

    let tmpMidNodeNext
    if (midNode) {
      tmpMidNodeNext = midNode.next
      midNode.next = tmpNext
    }

    cur = tmpNext
    midNode = tmpMidNodeNext
  }

  return head
};

function reverse (head) {
  let cur = head
  let prev = null
  let next = head.next
  while (cur) {
    cur.next = prev
    prev = cur
    cur = next

    if (next) {
      next = next.next
    }
  }

  return cur ? cur : prev
}

// test
// const a2l = require('./utils/arrayToLinkList')
// const l2a = require('./utils/linkListToArray')

// console.log(l2a(reorderList(a2l([1, 2, 3, 4, 5]))))
// @lc code=end

