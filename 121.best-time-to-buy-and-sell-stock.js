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

/**

 - 思路 -

想象股票是一个波峰波谷的曲线，而且我们已经有了全部的股票价格，这很重要！

因为有了全部价格，所以我们得以上帝视角去看这个问题。也就是我们从**尾巴开始往开头找。**

1. 如果如果一直是前一个元素比后一个元素大，那还在**上坡，还没有到达波峰。**但是当比后一个比前一个元素大，说明到达波峰，开始下坡，记录当前波峰的这个值。
2. 当前一个比后一个元素小，说明在**下坡，**直到前一个比后一个元素大，说明开始上坡，。记录当前波谷的这个值。
3. 上面两点得到的两个值相减，就是这个区间的**最大利润。**

但是股票的曲线是有多个波峰波谷的，那就重复这个过程，计算出区间的最大利润值，如果比前一个区间的大，覆盖之，如果小，忽略。这样最后得出的利润值就是所有区间的最大利润值！

### 缺点

使用太多的内存，Your memory usage beats 18.52 % of javascript submissions (35.8 MB)。

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

