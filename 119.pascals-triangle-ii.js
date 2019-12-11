/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let preLayer
  for (let i = 1; i <= rowIndex + 1; i++) {
    let layer = new Array(i)
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        layer[j] = 1
      } else if (preLayer && i > 2) {
        layer[j] = preLayer[j - 1] + preLayer[j]
      }
    }

    preLayer = layer
  }

  return preLayer
};
// @lc code=end

