/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (31.98%)
 * Likes:    1989
 * Dislikes: 719
 * Total Accepted:    390.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an array, rotate the array to the right by k steps, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * Note:
 * 
 * 
 * Try to come up as many solutions as you can, there are at least 3 different
 * ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 思路：其实就是要自己实现一个原生的 pop 方法逻辑，不停的 pop，补到最前面，这个解法最暴力
 * @param {*} nums 
 * @param {*} k 
 */
// var rotate = function(nums, k) {
//   let len = nums.length
//   while (k > 0) {
//     let pop = nums[len - 1]
//     for (let i = len - 1; i >= 0; i--) {
//       nums[i] = nums[i - 1]
//     }
//     nums[0] = pop
//     k -= 1
//   }
//   return nums
// };

/**
 * 
 * @param {*} nums 
 * @param {*} step 
 * 不如直接把元素移动 k 步？这样子每个元素只需要移动一次，长度为 n 的数组需要移动 n 次。
 * 所以事件复杂度为 O(n)
 */
var rotate = function (nums, step) {
  let stepCnt = 0
  for (let startIndex = 0; stepCnt < nums.length; startIndex++) {
    let prevVal = nums[startIndex]
    let currentIndex = startIndex

    do {
      currentIndex = (currentIndex + step) % nums.length  
      let tmp = nums[currentIndex]
      nums[currentIndex] = prevVal
      prevVal = tmp  
      stepCnt += 1
    } while (currentIndex !== startIndex)
  }
}

// @lc code=end

