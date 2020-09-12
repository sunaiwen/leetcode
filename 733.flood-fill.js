/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
// 递归也是 DFS 啊，之前我还问过别人，不用递归，用深度遍历怎么解题……汗
// 这道题就是找到一个点，然后根据那个点向外扩散
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let curColor = image[sr][sc]
  if(curColor === newColor) {
    return image
  }

  fill(image, sr, sc, curColor, newColor)
  return image
};

function fill(image, sr, sc, color, newColor) {
  if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== color) {
    return
  }
  image[sr][sc] = newColor
  fill(image, sr - 1, sc, color, newColor)
  fill(image, sr + 1, sc, color, newColor)
  fill(image, sr, sc - 1, color, newColor)
  fill(image, sr, sc + 1, color, newColor)
}
// @lc code=end

