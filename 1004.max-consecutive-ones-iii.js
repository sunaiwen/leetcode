/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 思路：sliding window，思路和 [424] 一样，还比 424 简单，因为这里不需要记录每个字符的个数，
 * 只有 1 和 0 两种情况。
 */
var longestOnes = function(A, K) {
    let start = 0
    let oneCount = 0
    let result = 0

    for (let end = 0; end < A.length; end++) {
      if (A[end]=== 1) {
        oneCount += 1
      }

      if (end - start + 1 - oneCount > K) {
        if (A[start] === 1) {
          oneCount -= 1
        }
        start += 1
      } else {
        result = Math.max(result, end - start + 1)
      }
    }

    return result
};

// longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)
// @lc code=end

