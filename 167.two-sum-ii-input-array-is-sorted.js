/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (51.77%)
 * Likes:    1245
 * Dislikes: 508
 * Total Accepted:    328.6K
 * Total Submissions: 629.1K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers that is already sorted in ascending order, find
 * two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 * 
 * Note:
 * 
 * 
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may
 * not use the same element twice.
 * 
 * 
 * Example:
 * 
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * 思路，从两头往中间，也许能快点，因为在另外一头找到匹配的可能性比较大。
 * @param {*} numbers 
 * @param {*} target 
 */
var twoSum = function(numbers, target) {
  let len = numbers.length
  for ( let i = len - 1; i > 0; i-- ) {
    let num = numbers[i]
    let numToFind = target - num
    for (let j = 0; j < i; j++) {
      let num = numbers[j]
      if (num === numToFind) {
        return [j + 1, i + 1]
      } else if (num > numToFind) {
        break
      }
    }
  }
};
// @lc code=end

