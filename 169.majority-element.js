/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (54.72%)
 * Likes:    2314
 * Dislikes: 192
 * Total Accepted:    485.4K
 * Total Submissions: 876.3K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}
    const len = nums.length

    if (len === 1) {
      return nums[0]
    }

    for (let i = 0, j = len - 1; i <= j; i++, j--) {
      let num1 = nums[i]

      if (typeof map[num1] === 'undefined') {
        map[num1] = 1
      } else {
        map[num1] += 1
      }

      if (map[num1] > len / 2) {
        return num1
      }

      if (i !== j) {
        let num2 = nums[j]
        if (typeof map[num2] === 'undefined') {
          map[num2] = 1
        } else {
          map[num2] += 1
        }
  
        if (map[num2] > len / 2) {
          return num2
        }
      }
    }
};

// @lc code=end

