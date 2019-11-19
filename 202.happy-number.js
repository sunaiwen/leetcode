/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

 // NOTE: 这道题要注意的是题目里面的这句话：
 // or it loops endlessly in a cycle which does not include 1
 // 一开始不明白怎么判断不是 happy number 的情况，岂不是会死循环下去？
 // 其实从这句话就能知道，非 happy number 的充分条件是会陷入一个重复的循环中，
 // 这个循环里会碰到以前得到过的值，要不然怎么叫重复呢？
// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const record = []
    
    while (record.indexOf(n) === -1) {
      record.push(n)

      const digitList = (n + '').split('').map(Number)
      n = digitList.reduce(function (curTotal, cur) {
        return curTotal + (cur * cur)
      }, 0)

      if (n === 1) {
        return true
      }
    }

    return false
};
// @lc code=end

