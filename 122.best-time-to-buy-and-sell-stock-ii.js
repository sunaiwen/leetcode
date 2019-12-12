/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length
  let highestPrice  = prices[len - 1]
  let i = len - 2
  let totalProfit = 0

  for (; i >= 0; i--) {
    let p = prices[i]
    if (p > highestPrice) {
      highestPrice = p
    } else if (highestPrice > p) {
      let lowestP = prices[i]
      let profit = 0

      if (i === 0) {
        profit = highestPrice - lowestP
      } else {
        let j
        for (j = i - 1; j >= 0; j--) {
          let buyP = prices[j]
          if (buyP < lowestP) {
            lowestP = buyP
          } else if (buyP > lowestP) {
            break
          }
        }
        profit = highestPrice - lowestP
        // after for loop's minusing 1, let i can equal to j
        i = j + 1
        highestPrice = lowestP
      }
      totalProfit += profit
    }
  } 

  return totalProfit
};
// @lc code=end

