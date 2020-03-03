/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.15%)
 * Likes:    7158
 * Dislikes: 1858
 * Total Accepted:    1.2M
 * Total Submissions: 3.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路一成绩：Your runtime beats 89.49 % of javascript submissions
 * 解释：一位一位数的相加，如果大于 9，就往前面进位。等到 l1, l2 都加完了，整个过程也就结束了。
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0)
  let startPoint  = l3
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)

    l3.val += sum
    if (l3.val > 9) {
      const nextVal = Math.floor(l3.val / 10)
      l3.val = l3.val % 10
      l3.next = new ListNode(nextVal)
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }

    if (l1 || l2) {
      if (!l3.next) {
        l3.next = new ListNode(0)
      }
      l3 = l3.next
    }
  }

  return startPoint
};

// test
// function ListNode (val) {
//   this.val = val
//   this.next = null
// }

// const arrToLink = require('./utils/arrayToLinkList')
// const linkToArr = require('./utils/linkListToArray')
// const retList = addTwoNumbers(
//   arrToLink([2,4,3]),
//   arrToLink([5,6,4])
// )

// console.log(linkToArr(retList))
// @lc code=end

