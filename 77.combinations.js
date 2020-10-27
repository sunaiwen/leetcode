/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 思路：这还是 search 的类型题，按照题意想办法把数据展示成树状结构，DFS 搜索。
 * 时间复杂度：O(C(n, k))，C 是排列组合的意思，也就是在 n 中取 k 个，有多少种组合的意思。
 * 空间复杂度：O(k)，需要一个 curr 数组存储当前的已选元素
 */
var combine = function(n, k) {
  const ret = []
  const arr = []

  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  dfs(arr, k, 0, [], ret)
  return ret
};

function dfs(arr, k, start, curr, ret) {
  if(k === 0) {
    ret.push([...curr])
    return
  }
  for(let i = start; i < arr.length; i++) {
    curr.push(arr[i])
    dfs(arr, k - 1, i + 1, curr, ret)
    curr.pop()
  }
}

// console.log(JSON.stringify(combine(4, 2)))
// @lc code=end

