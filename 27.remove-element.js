/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0
  let j = nums.length - 1

  while (j >= i) {
    if (nums[j] === val) {
      nums.splice(j, 1)
    }
    if (i !== j && nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i += 1
    }

    j -= 1
  }

  return nums.length
};
// @lc code=end

