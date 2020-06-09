/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  if (k > s.length) {
    return s.length
  }

  let lp = 0
  let countArr = []
  let maxCount = 0
  let result = 0
  
  for (let rp = 0; rp < s.length; rp++) {
    if (countArr[getIndex(s, rp)] == null) {
      countArr[getIndex(s, rp)] = 0
    }
    countArr[getIndex(s, rp)] += 1

    if (countArr[getIndex(s, rp)] > maxCount) {
      maxCount = countArr[getIndex(s, rp)]
    }

    while (rp - lp + 1 - maxCount > k) {
      lp += 1
      countArr[getIndex(s, lp)] -= 1

      maxCount = 0
      for (let i = 0; i < 26; i++) {
        if (countArr[i] > maxCount) {
          maxCount = countArr[i]
        }
      }
    }

    result = Math.max(result, rp - lp + 1)
  }  

  return result
};

function getIndex (s, idx) {
  return s.charCodeAt(idx) - 'A'.charCodeAt(0)
}

characterReplacement("ABAA", 0)
// @lc code=end

