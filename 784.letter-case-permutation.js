/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */

/**
 * 简单的 dfs，runtime 只打败了 9%...
 */
// var letterCasePermutation = function(S) {
//   const ret = []
//   dfs(S, 0, [], ret)
//   return ret
// };

// function dfs(S, startIdx, cur, ret) {
//   if(cur.length === S.length) {
//     ret.push(cur.join(''))
//     return
//   }

//   for(let i = startIdx; i < S.length; i++) {
//     const char = S.charAt(i)
//     const charCode = char.charCodeAt(0)
//     cur.push(char)
//     dfs(S, i + 1, cur, ret)
//     cur.pop()

//     if(65 <= charCode && charCode <= 90) {
//       cur.push(char.toLowerCase())
//       dfs(S, i + 1, cur, ret)
//       cur.pop()
//     }

//     if(97 <= charCode && charCode <= 122 ) {
//       cur.push(char.toUpperCase())
//       dfs(S, i + 1, cur, ret)
//       cur.pop()
//     }
//   }
// }

/**
 * BFS
 * Time complexity: O(2^n)，因为一棵树的层数刚好和 S 的长度 n 相等。
 * 如果长度为 n，那么遍历整棵树需要的运算次数为 2^0 + 2^1 + 2^2 + ...2^n = ~2^n。
 *
 * Space complexity: O(n)，因为中间只需要一个 queue 去装载每层的的结果。
 * 但是每一层都是拿出一个 push 进去一个，数量一直都为 n，所以为 O(n)。
 */

var letterCasePermutation = function (S) {
  const queue = ['']
  const charList = S.split('')

  while(charList.length) {
    const curLevelLenth = queue.length
    const char = charList.shift()
    const charCode = char.charCodeAt(0)

    for(let i = 0; i < curLevelLenth; i++) {
      const curLevelItem = queue.shift()
      queue.push(curLevelItem + char)

      if(65 <= charCode && charCode <= 90) {
        queue.push(curLevelItem + char.toLowerCase())
      } else if(97 <= charCode && charCode <= 122 ) {
        queue.push(curLevelItem + char.toUpperCase())
      }
    }
  }

  return queue
}

// letterCasePermutation('a1b2')
// @lc code=end

