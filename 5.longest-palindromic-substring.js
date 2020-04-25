/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.90%)
 * Likes:    6055
 * Dislikes: 494
 * Total Accepted:    864.7K
 * Total Submissions: 3M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
 * 暴力解法：获取全部可能性的子字符串，在里面找对称的字符串
 * 时间复杂度：O(n^2)
 */
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s
  }
  let len = 0
  let result = ''
  for (let currentCharTypeCount = 1; currentCharTypeCount <= 26; currentCharTypeCount++) {
    let curArrCount = []
    let left = 0
    let right = 0
    let charTypeCount = 0

    while (right < s.length) {
      if (charTypeCount <= currentCharTypeCount) {
        const char = s.charAt(right)
        const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0)

        if (!curArrCount[charIdx]) {
          curArrCount[charIdx] = 1
          charTypeCount += 1
        } else {
          curArrCount[charIdx] += 1
        }

        if (charTypeCount === currentCharTypeCount) {
          if (charTypeCount === 1) {
            const palindromicSubstring = s.slice(left, right + 1)

            if (palindromicSubstring.length > len) {
              len = palindromicSubstring.length
              result = palindromicSubstring
            }
          } else {
            let currentLeft = left
            while (currentLeft < right) {
              const char = s.charAt(currentLeft)
              const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0)
        
              if (curArrCount[charIdx] === 1) {
                break
              }
        
              const palindromicSubstring = checkPalindrome(s, currentLeft, right + 1)
              if (palindromicSubstring.length > len) {
                result = palindromicSubstring
                len = result.length
              }
              currentLeft += 1
            }
          }
        }

        right += 1
      } else {
        const char = s.charAt(left)
        const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0)

        if (curArrCount[charIdx]) {
          curArrCount[charIdx] -= 1
        }

        if (curArrCount[charIdx] === 0) {
          charTypeCount -= 1
        }

        left += 1
      }
    }
  }

  return result
};

function checkPalindrome (s, left, right) {
  const substring = s.slice(left, right)

  if (substring.length === 1) {
    return substring
  }

  for (let i = 0, j = substring.length - 1; i < j; i++, j--) {
    const leftChar = substring.charAt(i)
    const rightChar = substring.charAt(j)

    if (leftChar !== rightChar) {
      return ''
    }
  }

  return substring
}

// console.log(longestPalindrome('ccc'))
// @lc code=end

