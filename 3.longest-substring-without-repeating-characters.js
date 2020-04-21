/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.73%)
 * Likes:    8427
 * Dislikes: 509
 * Total Accepted:    1.4M
 * Total Submissions: 4.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 思路：sliding window
 * 一直扩大窗口，直到遇见一个相同的字母，记录此时窗口的 substring 长度。
 * 由于不能有重复字母，所以重复字母前面的字符全部作废，新的窗口从重复字母的下一位开始。
 * 就这样，窗口一直向字母末尾移动，到了末尾就结束了循环。此前记录的最大长度就是答案。
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0
  }

  let currentLongestLen = 0
  let currentSubstring = ''

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    let index = currentSubstring.indexOf(char)
    if (index > -1) {
      if (currentSubstring.length > currentLongestLen) {
        currentLongestLen = currentSubstring.length
      }
      currentSubstring = currentSubstring.slice(index + 1)
    }
    currentSubstring += char
  }

  if (currentSubstring.length > currentLongestLen) {
    currentLongestLen = currentSubstring.length
  }

  return currentLongestLen
};

console.log(lengthOfLongestSubstring('au'))
// @lc code=end

