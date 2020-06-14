/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 思路：参考下面的思路，因为题目的前提是 each integer is between 1 and n (inclusive)
 * 所以看成每一个数组的值都指向下一个下标，拿题目的 example 1 来看，就是：0 -> 1 1 -> 3 3 -> 2 2 -> 4 4 -> 2 2 -> 4 4 -> 2 ...
 * 看得出来这里已经有了一个回环。之前做过的 [142] Linked List Cycle II 里面刚好有个 Floyd's cycle detection 的算法，不就是用于这个场景吗？
 * 所以我们取两个指针，第一个一次走一步，第二个一次走两步，走两步在这里的表现就是 nums[nums[index]]。
 * 
 * 因为题意的前提是，Assume that there is only one duplicate number, find the duplicate one，所以肯定是有循环的。
 * 那么按照 floyd 算法，第一个 while 循环先让两个指针一直前进，直到相等。之后，再由另外一个指针从列表的头开始，
 * 另外一个指针从相遇的地方开始，它们相遇的地方，就是回环开始的地方。
 * 既然有回环，那就已经证明了这里肯定有相同的值。
 * 
 * 所以从头开始的这一次相遇的地方，就是重复的那个节点，即当前节点的值就是本题的答案了。
 * 
 * 
 * 参考：https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.
 */
var findDuplicate = function (nums) {
  let start = nums[0]
  let end = nums[nums[0]]

  try {
    while (start !== end) {
      start = nums[start]
      end = nums[nums[end]]
    }
  } catch (e) {
    return -1
  }

  end = 0
  while (start !== end) {
    end = nums[end]
    start = nums[start]
  }

  return start
}
// @lc code=end
