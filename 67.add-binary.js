/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (42.71%)
 * Likes:    1509
 * Dislikes: 256
 * Total Accepted:    408.5K
 * Total Submissions: 953.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * Each string consists only of '0' or '1' characters.
 * 1 <= a.length, b.length <= 10^4
 * Each string is either "0" or doesn't contain any leading zero.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * 思路: 很暴力，基本上就是把所有的可能性都罗列一次……肯定还有优雅的解法
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length)
  let ret = ''

  for (let i = 0; i < len; i++) {
    const latestBit = ret.charAt(ret.length - i - 1)
    const aChar = a.charAt(a.length - i - 1) || '0'
    const bChar = b.charAt(b.length - i - 1) || '0'

    if (aChar === '1' && bChar === '1') {
      if (latestBit === '1') {
        ret = ('11') + ret.slice(1)
      } else if (latestBit === '0') {
        ret = ('10') + ret.slice(1)
      } else {
        ret = ('10') + ret
      }
    } else if (aChar === '0' && bChar === '0') {
      if (!latestBit) {
        ret = '0' + ret
      }
    } else {
      if (latestBit === '1') {
        ret = '10' + ret.slice(1)
      } else {
        ret = '1' + ret
      }
    }
  }

  return ret
};

// console.log(addBinary('1010', '1011'))
// @lc code=end

