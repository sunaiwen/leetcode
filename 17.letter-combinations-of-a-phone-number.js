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

// BFS
var letterCombinations = function(digits) {
  if(!digits) {
    return []
  }
  let idx = 0
  let prev = []
  while (idx < digits.length) {
    const currentLevel = map[digits.charAt(idx)]
    if(prev.length === 0) {
      for(let i = 0; i < currentLevel.length; i++) {
        prev.push(currentLevel[i])
      }
    } else {
      let tmp = []
      for(let i = 0; i < prev.length; i++) {
        for(let j = 0; j < currentLevel.length; j++) {
          tmp.push(prev[i] + currentLevel[j])
        }
      }
      prev = tmp
    }
    idx += 1
  }

  return prev
}

// DFS
// var letterCombinations = function(digits) {
//   if(!digits) {
//     return []
//   }
//   const ret = []
//   combind(0, digits, '', ret)
//   return ret
// };

// function combind(i, digits, curCombination, ret) {
//   if(i == digits.length) {
//     ret.push(curCombination)
//     return ret
//   }

//   const curOptions = map[digits[i]]
//   for(let j = 0; j < curOptions.length; j++) {
//     combind(i + 1, digits, curCombination + curOptions.charAt(j), ret)
//   }
// }

// console.log(letterCombinations('23'))
// @lc code=end

