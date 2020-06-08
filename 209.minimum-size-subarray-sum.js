/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

/**
 * date: 20200608
 * Accepted
 * 15/15 cases passed (252 ms)
 * Your runtime beats 7.91 % of javascript submissions
 * Your memory usage beats 52.09 % of javascript submissions (35.8 MB)
 * 思路：sliding window
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) {
    return 0
  }
  let lp = 0
  let rp = 0
  let minLen
  let sum = nums[rp]

  while (rp <= nums.length - 1) {
    if (sum < s) {
      rp += 1
      sum += nums[rp]
    } else {
      const curLen = rp - lp + 1
      if (typeof minLen === 'undefined' || curLen < minLen) {
        minLen = curLen
      }

      sum -= nums[lp]
      lp += 1
    }
  }

  if (typeof minLen === 'undefined') {
    return 0
  }

  return minLen
};

// minSubArrayLen(7, [2,3,1,2,4,3])
// @lc code=end

