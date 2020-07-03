/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 思路：从左往右去缩小扫描的窗口。
 * 时间复杂度：n + n-1 + .... 1 ~= n^2 / 2
 */

var threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort((a, b) => a - b)
  let result = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length - 2; i++) {
    start = i + 1
    let end = nums.length - 1

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }

      if (sum > target) {
        end -= 1
      } else {
        start += 1
      }
    }
  }

  return result
};

// console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
// @lc code=end


