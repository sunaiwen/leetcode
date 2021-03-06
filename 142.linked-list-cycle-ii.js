/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 *
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (34.06%)
 * Likes:    2165
 * Dislikes: 177
 * Total Accepted:    281.8K
 * Total Submissions: 794.9K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given a linked list, return the node where the cycle begins. If there is no
 * cycle, return null.
 * 
 * To represent a cycle in the given linked list, we use an integer pos which
 * represents the position (0-indexed) in the linked list where tail connects
 * to. If pos is -1, then there is no cycle in the linked list.
 * 
 * Note: Do not modify the linked list.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * second node.
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * first node.
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = [1], pos = -1
 * Output: no cycle
 * Explanation: There is no cycle in the linked list.
 * 
 * 
 * 
 * 
 * 
 * 
 * Follow-up:
 * Can you solve it without using extra space?
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
 * 思路一：较低效……遍历到链表的某个节点，再从 head 节点遍历一次过来，看看会不会在碰到当前节点之前，碰到当前节点的 next。
 * 如果碰到了，就说明有环。
 */
// var detectCycle = function(head) {
//   if (head == null || head.next == null) {
//     return null
//   }
//   if (head.next === head) {
//     return head
//   }
//   let tmp = head

//   while (tmp.next) {
//     tmp = tmp.next

//     if (tmp.next === tmp) {
//       return tmp
//     }
//     let tmpNext = head
//     while (tmpNext !== tmp) {
//       if (tmpNext === tmp.next) {
//         return tmpNext
//       }
//       tmpNext = tmpNext.next
//     }
//   }

//   return null
// };

// const atl = require('./utils/arrayToLinkList')
// const node = atl([-1,-7,7,-4,19,6,-9,-5,-2,-5])
// let tmp = node
// let index = 0
// let cycleNode

// while (tmp) {
//   if (index === 9) {
//     cycleNode = tmp
//     // console.log(tmp)
//   }

//   if (!tmp.next) {
//     break
//   }
//   tmp = tmp.next
//   index += 1
// }
// tmp.next = cycleNode


// console.log(
//   detectCycle(
//     node
//   )
// )


/**
 * 思路 2: 这个算法叫 Floyd's cycle detection。
 * 
 * 假设链表环的长度为 R，现在有两个指针，快的指针一次两步，慢的一次一步。他们相遇的时候，快的指针比慢的指针肯定多走了 n * R 步。
 * n 是圈数。想象一下，两颗卫星围绕一颗行星旋转，它们在同一个点出发，一个慢一个快，当快的比慢的走了轨道周长的整倍数之后，
 * 他们就相遇了。
 * 
 * 假设慢的指针从出发到相遇一共走了 S 步，那快的指针就走了 2S 步。所以这里就有 2S - S = n * R。
 * 假设从链表开头到环状的开始的距离为 L 步。又假设环状的开头到相遇的点的距离为 M 步。这里有 S = M + L，带到上面那个等式，就有：M + L = n * R。
 * 
 * 再有就是 n * R - M = L，说明停留的点到链表开始的点的距离刚好缺了 L 步，多了这 L 步，就可以组成一个链表周长的整数倍了。
 * 所以从链表开头到相遇的点的距离肯定等于
 */
var detectCycle = function (head) {
  let slowP = head
  let fastP = head
  let isCycle = false

  while (slowP && fastP) {
    slowP = slowP.next

    if (fastP.next == null) {
      return null
    }
    fastP = fastP.next.next

    if (slowP === fastP) {
      isCycle = true
      break
    }
  }

  if (!isCycle) {
    return null
  }

  slowP = head
  while (slowP !== fastP) {
    slowP = slowP.next
    fastP = fastP.next
  }

  return slowP
}
// @lc code=end

