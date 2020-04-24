/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (40.37%)
 * Likes:    1212
 * Dislikes: 106
 * Total Accepted:    70K
 * Total Submissions: 172.7K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 
 * Find the length of the longest substring T of a given string (consists of
 * lowercase letters only) such that every character in T appears no less than
 * k times.
 * 
 * 
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is
 * repeated 3 times.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const countArr = []
  let len = 0

  for (let i = 1; i <= 26; i++) {
    let left = 0
    let right = 0
    let unique = 0
    let reachK = 0
    while (right < s.length) {
      const char = s.charAt(right)
      let idx = Number(char) - Number('a')

      if (unique <= i) {
        if (countArr[idx] == null) {
          countArr[idx] = 1
          unique += 1
        } else {
          countArr[idx] += 1
        }

        if (countArr[idx] === k) {
          reachK += 1
        }
        right += 1
      } else {
        countArr[idx] -= 1
        if (countArr[idx] === 0) {
          unique -= 1
        }
        if (countArr[idx] === k - 1) {
          reachK -= 1
        }
        left += 1
      }

      if (i === unique && unique === reachK) {
        const curLen = right - left
        if (curLen > len) {
          len = curLen
        }
      }
    }
  }

  return len
};

// @lc code=end

