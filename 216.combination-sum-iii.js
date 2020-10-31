/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/**
 * DFS
 * search 方法
 */
var combinationSum3 = function(k, n) {
  const ret = []
  dfs(n, k, 1, [], ret)
  return ret
};

function dfs(n, k, start, cur, ret) {
  if(k === 0) {
    if(n === 0) {
      ret.push([...cur])
    }
    return
  }

  for(let i = start; i < 10; i++) {
    cur.push(i)
    dfs(n - i, k - 1, i + 1, cur, ret)
    cur.pop()
  }
}

// combinationSum3(3, 9)
// @lc code=end

