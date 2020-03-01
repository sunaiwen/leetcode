/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 * 思路：最关键的是要知道从长度大于 3 开始，非首尾的元素的和都由上一层的同一下标(i)的元素和其前面的元素(i - 1) 的和相加而得。
 */
var generate = function(numRows) {
  let tria = []
  for (let i = 1; i <= numRows; i++) {
    let layer = new Array(i)
    let preLayer = tria[i - 2]
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        layer[j] = 1
      } else if (preLayer && i > 2) {
        layer[j] = preLayer[j - 1] + preLayer[j]
      }
    }

    tria.push(layer)
  }

  return tria
};
// @lc code=end

