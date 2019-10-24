/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[nums.length - i] === nums[nums.length - i - 1]) {
      nums.splice(nums.length - i - 1, 1)
    }
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
      i -= 1
    }

  }
  return nums.length
};
// @lc code=end

