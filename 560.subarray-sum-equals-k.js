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
 * 思路：仍然锯齿 sliding window...
 * 
 * 记录之前的所有 sum，那些 sum 可能是由 0 到 i，也有可能是 0 到 j，但只要找到一个当前的数相加之和减去
 * k 刚好等于之前记录的 sum，就可以说明组成那个 sum 的最后一个下标比如是 j，到当前的下标比如是 z，是有一个区间的
 * 相加之和是 k 的！佩服佩服…
 * 这道题没想出来，参考了 discussion 的最高赞回答…
 */
var subarraySum = function(nums, k) {
  const map = new Map()
  let preSum = 0
  let result = 0
  let sum = 0
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - k)) {
      result += map.get(sum - k)
    }
    const preSumCount = map.get(sum) || 0
    map.set(sum, preSumCount + 1)
  }

  return result
};

console.log(subarraySum([1], 0))
// @lc code=end

