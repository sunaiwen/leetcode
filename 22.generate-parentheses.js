/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = []
  dfs(ret, [], n, n)
  return ret
};

function dfs(ret, cur, leftCnt, rightCnt) {
  if(leftCnt === 0 && rightCnt === 0) {
    ret.push(cur.join(''))
  } else if(leftCnt === rightCnt) {
    cur.push('(')
    dfs(ret, cur, leftCnt - 1, rightCnt)
    cur.pop()
  } else {
    if(leftCnt > 0) {
      cur.push('(')
      dfs(ret, cur, leftCnt - 1, rightCnt)
      cur.pop()
    }

    if(rightCnt > 0) {
      cur.push(')')
      dfs(ret, cur, leftCnt, rightCnt - 1)
      cur.pop()
    }
  }
}

// generateParenthesis(3)
// @lc code=end

