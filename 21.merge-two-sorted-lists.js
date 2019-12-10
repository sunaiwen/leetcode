/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
    return l2
  }

  if (l2 == null) {
    return l1
  }
  let originL1 = l1
  let prev
  while (l2) {
    if (l2.val <= l1.val) {
      let tmpL2Next = l2.next
      l2.next = l1
      if (prev) {
        prev.next = l2
      } else {
        originL1 = l2
      }
      prev = l2
      l2 = tmpL2Next
    } else if (l1.next == null) {
      l1.next = l2
      return originL1
    } else {
      prev = l1
      l1 = l1.next
    }
  }

  return originL1
}

// function listToLink (arr) {
//   let startNode
//   let prevNode
//   while (arr.length) {
//     const item = arr.shift()
//     const node = {
//       next: null,
//       val: item
//     }

//     if (prevNode) {
//       prevNode.next = node
//     } else {
//       startNode = node
//     }

//     prevNode = node
//   }

//   return startNode
// }

// function linkToList (startNode) {
//   while (startNode) {
//     console.log(startNode.val)
//     startNode = startNode.next
//   }
// }

// linkToList(mergeTwoLists(listToLink([1,2,4]), listToLink([1,3,4])))
// // @lc code=end
