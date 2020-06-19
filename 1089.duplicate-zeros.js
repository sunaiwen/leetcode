/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 思路：先算 0 的个数，翻倍之后的 0 会把数组增长 0 的个数的长度，然后这就是两个指针相距的距离。
 * 如果遇到了 0 就多复制一次。直到前面的指针到头。
 */
var duplicateZeros = function(arr) {
  let zeroCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount += 1
    }
  }

  let end = arr.length + zeroCount - 1
  let start = arr.length - 1

  while (start >= 0 && end >= 0) {
    if (arr[start] !== 0) {
      if (end < arr.length) {
        arr[end] = arr[start]
      }
    } else {
      if (end < arr.length) {
        arr[end] = arr[start]
      }
      end -= 1
      if (end < arr.length) {
        arr[end] = arr[start]
      }
    }
    start -= 1
    end -= 1
  }

  return arr
};

// console.log(duplicateZeros([8,4,5,0,0,0,0,7]))
// @lc code=end

