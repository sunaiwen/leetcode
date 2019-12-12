/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
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
  let maxProfit = 0

  for (; i >= 0; i--) {
    let p = prices[i]
    if (p > highestPrice) {
      highestPrice = p
    } else if (highestPrice > p) {
      let lowestP = prices[i]
      let profit

      if (i === 0) {
        profit = highestPrice - lowestP
      } else {
        for (let j = i - 1; j >= 0; j--) {
          let buyP = prices[j]
          if (buyP < lowestP) {
            lowestP = buyP
          } else if (buyP > lowestP) {
            profit = highestPrice - lowestP
            // after for loop's minusing 1, let i can equal to j
            i = j + 1
            break
          }
        }
      }

      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  } 

  return maxProfit
};

maxProfit([1,7,2,4])
// @lc code=end

