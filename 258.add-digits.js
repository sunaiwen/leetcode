/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (55.79%)
 * Likes:    620
 * Dislikes: 981
 * Total Accepted:    273.8K
 * Total Submissions: 490.8K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 * 思路：递归相加，直到小于 10
 */
var addDigits = function(num) {
  if (num < 10) {
    return num
  }
  const numArr = (num + '').split('').map(Number)
  return addDigits(addTotal(numArr))
};

function addTotal (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  return sum
}
// @lc code=end

