/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (43.66%)
 * Likes:    1188
 * Dislikes: 95
 * Total Accepted:    416.8K
 * Total Submissions: 939.3K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 *
 * Example 1:
 *
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
 * 思路一：只需要一个指针，如果发现连续两个相等，就把指针指向后面再后面那个。
 * 也就是跳过了中间这个，但指针仍停留在原节点。如果没有相等，指针就往前面一个节点移动。
 * 直到发现连续相等的……
 * 直到链表的末尾。
 */
var deleteDuplicates = function(head) {
  let cur = head

  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}
// @lc code=end
