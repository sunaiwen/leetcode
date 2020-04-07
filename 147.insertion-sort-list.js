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
 */
var insertionSortList = function(head) {
  let currentNode = head
  let currentNextNode = currentNode.next

  while (currentNextNode) {
    let prevNode
    currentNextNode = currentNode.next

    while (currentNode.next) {
      const tempNode = currentNode.next

      if (currentNode.val > tempNode.val) {
        prevNode = currentNode
        currentNode = tempNode
        continue
      } else {
        if (prevNode) {
          swap(prevNode, currentNode, tempNode)
        }
        break
      }
    }

    currentNode = currentNextNode
    prevNode = null
  }
};

function swap (prev, current, nextNode) {
  prev.next = current.next
  current.next = nextNode.next
  nextNode.next = current

  return current
}

const a2l = require('./utils/arrayToLinkList')
const l2a = require('./utils/linkListToArray')

const testData = [5,6,1,9,3,2,5,4,19,4,1]
console.log(l2a(insertionSortList(a2l(testData))))
// @lc code=end

