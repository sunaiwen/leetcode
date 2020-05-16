/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const wordList = s.split(' ')
  
  for (let i = wordList.length - 1; i >= 0; i--) {
      const word = wordList[i]
      
      if (word === '') {
          continue
      }
      
      return word.length
  }
  
  return 0;
};

lengthOfLastWord('a ')
// @lc code=end

