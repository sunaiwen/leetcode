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
/**
 * 对于 BFS，从第一个输入的层级开始，第一层和第二层混合，然后一二层混合的产物，再和接下来的层混合。
 * 直到最后一层。
 *
 *
 * 时间复杂度：
 * 最坏情况是重复按了能输出 4 个字母的键，按了 n 次，
 * 那里面的两个 for 循环就是 4^2，重复 n 次就是 4 * 4 进行 n 次，
 * 所以是 4 ^ n 平方。
 *
 */
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

/**
 * DFS
 * 对于 DFS，先往最深处一直叠加，然后返回上一层，基于本层再次往深处叠加。依次规律继续进行。
 */
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

