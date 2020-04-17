/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (43.53%)
 * Likes:    3637
 * Dislikes: 117
 * Total Accepted:    219.8K
 * Total Submissions: 505.1K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * Given an array of integers and an integer k, you need to find the total
 * number of continuous subarrays whose sum equals to k.
 * 
 * Example 1:
 * 
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 * 
 * 
 * 
 * Note:
 * 
 * The length of the array is in range [1, 20,000].
 * The range of numbers in the array is [-1000, 1000] and the range of the
 * integer k is [-1e7, 1e7].
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 思路：sliding window 类型。
 */
var subarraySum = function(nums, k) {
  let start = 0
  let end = 0
  let count = 0
  let currentSum = nums[0]

  while (end < nums.length) {
    if (currentSum <= k) {
      if (currentSum === k) {
        count += 1
      } else {
        while (nums[start] < 0 && start < end) {
          start += 1
          currentSum -= nums[start]
        }
      }
      end += 1
      currentSum += nums[end]

    } else {
      start += 1
      currentSum -= nums[start]
    }
  }

  return count
};

console.log(subarraySum([-1, -1, 1], 0))
// @lc code=end

