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
var letterCasePermutation = function(S) {
  const ret = []
  dfs(S, 0, [], ret)
  return ret
};

function dfs(S, startIdx, cur, ret) {
  if(cur.length === S.length) {
    ret.push(cur.join(''))
    return
  }

  for(let i = startIdx; i < S.length; i++) {
    const char = S.charAt(i)
    const charCode = char.charCodeAt(0)
    cur.push(char)
    dfs(S, i + 1, cur, ret)
    cur.pop()

    if(65 <= charCode && charCode <= 90) {
      cur.push(char.toLowerCase())
      dfs(S, i + 1, cur, ret)
      cur.pop()
    }

    if(97 <= charCode && charCode <= 122 ) {
      cur.push(char.toUpperCase())
      dfs(S, i + 1, cur, ret)
      cur.pop()
    }
  }
}

// letterCasePermutation('C')
// @lc code=end

