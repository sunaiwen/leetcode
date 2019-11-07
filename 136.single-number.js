/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ht = {}
    if (nums.length === 1) {
      return nums[0]
    }
    for (let i = 0, j = nums.length - 1; j >= i; i++, j--) {
      if (typeof ht[nums[i]] === 'undefined') {
        ht[nums[i]] = 1
      } else {
        ht[nums[i]] = 2
      }

      if (i === j) {
        continue
      }
      if (typeof ht[nums[j]] === 'undefined') {
        ht[nums[j]] = 1
      } else {
        ht[nums[j]] = 2
      }
    }

    for (let k in ht) {
      if (ht[k] === 1) {
        return k
      }
    }
};
// @lc code=end

