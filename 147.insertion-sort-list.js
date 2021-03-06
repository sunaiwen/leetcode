/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 *
 * https://leetcode.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (39.89%)
 * Likes:    509
 * Dislikes: 536
 * Total Accepted:    174.4K
 * Total Submissions: 436.7K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list using insertion sort.
 * 
 * 
 * 
 * 
 * 
 * A graphical example of insertion sort. The partial sorted list (black)
 * initially contains only the first element in the list.
 * With each iteration one element (red) is removed from the input data and
 * inserted in-place into the sorted list
 * 
 * 
 * 
 * 
 * 
 * Algorithm of Insertion Sort:
 * 
 * 
 * Insertion sort iterates, consuming one input element each repetition, and
 * growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it
 * there.
 * It repeats until no input elements remain.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
 * 思路：遍历一遍链表，把节点压入栈，每次取两个出来排序，把右边变成 insertion sort 的 sorted range，和通常的放在左边的方式相反，
 * 但刚好又能顺着链表的方向。
 */
var insertionSortList = function(head) {
  const stack = []
  let currentNode = head
  while (currentNode) {
    stack.push(currentNode)
    currentNode = currentNode.next
  }

  let cur = stack.pop()
  let prev = stack.pop()
  while (prev || cur) {
    let tempPrev = cur
    let tempNext = cur.next
    while (tempNext) {
      if (tempNext && cur.val > tempNext.val) {
        tempPrev = tempNext
        tempNext = tempNext.next
      } else {
        break
      }
    }

    if (tempPrev !== cur) {
      if (prev) {
        prev.next = prev.next.next
      } else {
        head = cur.next
      }
      tempPrev.next = cur
      cur.next = tempNext
    }

    cur = prev
    prev = stack.pop()
  }

  return head
};

// const a2l = require('./utils/arrayToLinkList')
// const l2a = require('./utils/linkListToArray')

// const testData = [4,2,1,3]
// console.log(l2a(insertionSortList(a2l(testData))))
// @lc code=end

