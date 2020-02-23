/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (54.10%)
 * Likes:    1141
 * Dislikes: 129
 * Total Accepted:    477.7K
 * Total Submissions: 866.6K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const lenS = s.length
  const lenT = t.length

  if (lenS !== lenT) {
    return false
  }

  const mapS = toMap(s)
  const mapT = toMap(t)

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (mapS[char] !== mapT[char]) {
      return false
    }
  }
  return true
};

function toMap (str) {
  const map = {}
  const len = str.length
  for (let i = 0; i < len; i++) {
    const char = str.charAt(i)
    if (typeof map[char] !== 'undefined') {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }
  return map
}

// @lc code=end

