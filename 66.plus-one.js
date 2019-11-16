/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1
  
  digits[i] += 1

  while (digits[i] >= 10) {
    if (i === 0) {
      digits.unshift(0)
      i += 1
    }

    digits[i - 1] += 1
    digits[i] -= 10
    i -=1
  }

  return digits
};
// @lc code=end

