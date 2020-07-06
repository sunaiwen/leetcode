/**
 * [876] middle-of-the-linked-list.js
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// @lc code=start


// 思路：先走一遍过，看看链表的长度是多少，然后除以 2。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let cnt = 0
  let end = head

  while (end.next) {
    cnt += 1
    end = end.next
  }

  for (let i = 0; i < Math.ceil(cnt / 2); i++) {
    head = head.next
  }

  return head
};



// @lc code=end
