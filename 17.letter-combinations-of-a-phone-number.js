/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

// DFS
var letterCombinations = function(digits) {
  if(!digits) {
    return []
  }
  const ret = []
  combind(0, digits, '', ret)
  return ret
};

function combind(i, digits, curCombination, ret) {
  if(i == digits.length) {
    ret.push(curCombination)
    return ret
  }

  const curOptions = map[digits[i]]
  for(let j = 0; j < curOptions.length; j++) {
    combind(i + 1, digits, curCombination + curOptions.charAt(j), ret)
  }
}

// console.log(letterCombinations('23'))
// @lc code=end

