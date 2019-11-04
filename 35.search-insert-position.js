/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0
    let j = nums.length - 1

    if (nums[0] >= target) {
      return 0
    }

    if (nums[nums.length - 1] < target) {
      return nums.length
    }

    while (i < j) {
      if (nums[i] < target && nums[i + 1] >= target) {
        return i + 1
      }

      if (nums[j - 1] < target && nums[j] >= target) {
        return j
      }
      i += 1
      j += 1
    }
};
// @lc code=end

