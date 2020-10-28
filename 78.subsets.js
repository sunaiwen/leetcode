/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /**
  * 思路：把题意化为 tree，进行 dfs。
  *
  * Time Complexity:
  * 展开树之后，树的高度是 nums 的长度 n，所以最多有 2^n 次种可能。
  * 所以时间复杂度是 2^n
  *
  * Space Complexity:
  * 整个运算需要用到的是 cur 和 ret，cur 的复杂度是 n，ret 是 2^n，但是
  * 其他人分析的是 O(n)，不用把 ret 的算进去吗？？
  */
var subsets = function(nums) {
  const ret = []
  dfs(nums, 0, [], ret)
  return ret
};

function dfs(nums, start, cur, ret) {
  ret.push([...cur])
  for(let i = start; i < nums.length; i++) {
    cur.push(nums[i])
    dfs(nums, i + 1, cur, ret)
    cur.pop(nums[i])
  }
}

// subsets([1,2,3])
// @lc code=end

