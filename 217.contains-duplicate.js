/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (53.83%)
 * Likes:    577
 * Dislikes: 624
 * Total Accepted:    446.9K
 * Total Submissions: 820.3K
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 这个解法没啥好说的拉，缺点就是用了 map，空间复杂度是 O(n)
 */
var containsDuplicate = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
      if (typeof map[nums[i]] === 'undefined') {
        map[nums[i]] = nums[i]
        continue
      }

      return true
    }
    return false
};

// @lc code=end

