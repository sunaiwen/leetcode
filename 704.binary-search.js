/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 思路：这道题没啥好说的了，就是不能用递归，因为递归把作用域都隔绝了，
 * 但是这道题要记住下标，所以用循环是个更好的方法。
 */
var search = function(nums, target) {
  let lo = 0
  let hi = nums.length - 1
  while(hi - lo >= 0) {
    const mid = Math.round((hi + lo) / 2)
    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      hi = mid - 1
    } else if(nums[mid] < target) {
      lo = mid + 1
    }
  }

  return -1
};

// search([-1,0,3,5,9,12], 9)
// @lc code=end

