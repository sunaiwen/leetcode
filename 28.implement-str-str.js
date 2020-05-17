/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * 思路：needle 这个参数的暗示已经很明显了，needle 就是针的意思。所以就以 needle 为 window，划过整个 haystack，
 * 看看有没有找得到的。
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0
  }
  const haystackLen = haystack.length
  const needleLen = needle.length
  let leftPointer = 0
  let rightPointer = needleLen - 1

  while (rightPointer < haystackLen) {
    if (checkIsCover(haystack, needle, leftPointer, rightPointer)) {
      return leftPointer
    }

    leftPointer += 1
    rightPointer += 1
  }

  return -1
}

function checkIsCover(haystack, needle, leftPointer, rightPointer) {
  if (haystack.charAt(leftPointer) !== needle.charAt(0) || haystack.charAt(rightPointer) !== needle.charAt(needle.length - 1)) {
    return false
  }

  return haystack.slice(leftPointer, rightPointer + 1) === needle
}
// @lc code=end
