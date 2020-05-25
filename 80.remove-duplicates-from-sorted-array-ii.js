/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 思路：two pointers，一个在前一个在后，距离为题目规定的 2，扫描他们之间的元素，如果都相等，说明找到了重复
 * 三次的部分，删除在前面指针的元素。
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) {
    return nums.length
  }
  let front = 0
  let behind = 2

  for (let front = 0, behind = 2; behind < nums.length; front++, behind++) {
    let curFront = front
    let isFound = true
    while (curFront <= behind) {
      if (nums[curFront] !== nums[behind]) {
        isFound = false
        break
      }
      curFront += 1
    }

    if (isFound) {
      nums.splice(behind, 1)
      front -= 1
      behind -= 1
    }
  }

  return nums.length
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
// @lc code=end
