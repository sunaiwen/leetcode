/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
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

