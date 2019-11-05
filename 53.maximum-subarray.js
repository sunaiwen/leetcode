/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let cur = max

  for (let i = 1; i < nums.length; i++) {
    if (cur < 0) {
      cur = nums[i]
    } else {
      cur += nums[i]
    }

    if (cur > max) {
      max = cur
    }
  }

  return max
};
// @lc code=end

