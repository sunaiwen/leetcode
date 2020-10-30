/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * BFS
 * 思路：先拿空数组作为第一层，然后遍历第一层，
 * 逐个添加元素进去。依次循环，不断的遍历上一层，依次添加元素
 * 但这本题是有重复元素的，并且是有序数组，两个重复元素会相连在一起。
 * 当判断 nums[i] === nums[i - 1] 的时候，为了避免 nums[i] 又
 * 走一遍 nums[i - 1] 的路，需要标记在 nums[i - 1] 这一轮循环之后截止
 * 的下标。然后从这个下标 + 1 的地方开始 nums[i] 这一轮的循环，避免产生重复
 * 的组合。
 *
 * 参考：https://leetcode.com/problems/subsets-ii/discuss/753050/JAVA-Simple-solution%3A-Subsets-(BFS)
 *
 * Time Complexity: O(2 ^ n)
 * Space Complexity: O(2 ^ n)
 */
var subsets = function(nums) {
  const ret = [[]]
  let startIdx = 0
  let endIdx = 0

  for(let i = 0; i < nums.length; i++) {
    startIdx = 0

    if(i > 0 && nums[i] === nums[i - 1]) {
      startIdx = endIdx + 1
    }

    endIdx = ret.length - 1
    for(let j = startIdx; j <= endIdx; j++) {
      const cur = [...ret[j]]
      cur.push(nums[i])
      ret.push(cur)
    }
  }

  return ret
}

subsets([1,2,2])
// @lc code=end

