/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (28.27%)
 * Likes:    912
 * Dislikes: 955
 * Total Accepted:    241.7K
 * Total Submissions: 835.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 * 思路：计算整个链表的长度，然后通过长度差去拿到分隔的节点，重新拼接。时间复杂度 O(n)。
 */
var rotateRight = function(head, k) {
  if (head == null) {
    return head
  }

  if (k === 0) {
    return head
  }

  if (head.next == null) {
    return head
  }

  let cnt = 0
  let tmp = head

  while (tmp) {
    cnt += 1
    tmp = tmp.next
  }

  k = k % cnt

  if (k === 0) {
    return head
  }

  let stop = head
  while (cnt - k > 1) {
    cnt -= 1
    stop = stop.next
  }

  let newHead = stop.next
  let newHeadTmp = newHead
  stop.next = null
  
  while (newHeadTmp.next) {
    newHeadTmp = newHeadTmp.next
  }

  newHeadTmp.next = head

  return newHead
};

/**
 * leetcode discussion 里面的 two pointer 思路：
 * you can use a two pointer technique where the 'fast' pointer is always k nodes ahead of 'slow'. 
 * By the time 'fast' reaches the last node, 'slow' must be pointing to the (k+1)th nodes from backwards, 
 * then you can simply detach slow->next from slow, then set fast->next to head, and you are done.
 */

// test
// const a2l = require('./utils/arrayToLinkList')
// const l2a = require('./utils/linkListToArray')

// console.log(
//   l2a(rotateRight(a2l([1, 2, 3, 4, 5]), 2))
// )

// @lc code=end

