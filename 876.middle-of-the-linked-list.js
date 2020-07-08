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

// 更好的思路：取两个指针，慢的一次走一步，快的一次走两步，等快的走到了链表尽头，那慢的就刚好停在链表的中间。
var middleNode = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

// 两个方法的时间复杂度都是 O(n)

// @lc code=end
