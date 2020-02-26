/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (45.43%)
 * Likes:    3421
 * Dislikes: 112
 * Total Accepted:    575.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 思路：动态规划，第 n 步的方式有第 n - 1 步的方式 + 1 这么多。也有第 n - 2 步 + 2 这么多。
 * 所以第 n 步的总方式就有第 n - 1 步和第 n - 2 步的总和这么多。
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 2
  }

  let pprev = 1
  let prev = 2
  for (let i = 2; i < n; i++) {
    let cur = pprev + prev
    pprev = prev
    prev = cur
  }
  return prev
};


// @lc code=end

