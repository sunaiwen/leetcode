/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 思路：先找到最短的字符串，根据这个字符串再去逐个匹配看看是否能命中，
 * 如果不能命中，说明这个字符串已经不能满足，把最后面的字符去除，继续试，
 * 直到找到，或者直到最短字符串被完全消耗掉。
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  let shortestStr = strs[0]
  let shortestStrIdx = 0
  let len = shortestStr.length

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i]

    if (str.length < len) {
      len = str.length
      shortestStr = str
      shortestStrIdx = i
    }
  }

  for (let i = 0; i < strs.length; i++) {
    if (i === shortestStrIdx) {
      continue
    }

    if (strs[i].startsWith(shortestStr) === false) {
      shortestStr = shortestStr.slice(0, shortestStr.length - 1)
      i -= 1
    }
  }

  return shortestStr
};
// @lc code=end

