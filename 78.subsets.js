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
  * 整个运算需要用到的是 cur 和 ret，cur 的复杂度是 n，ret 是 2^n，
  * 所以是 O(2 ^ n + n) ~= O(2 ^ n)
  */
// var subsets = function(nums) {
//   const ret = []
//   dfs(nums, 0, [], ret)
//   return ret
// };

// function dfs(nums, start, cur, ret) {
//   ret.push([...cur])
//   for(let i = start; i < nums.length; i++) {
//     cur.push(nums[i])
//     dfs(nums, i + 1, cur, ret)
//     cur.pop(nums[i])
//   }
// }

/**
 * BFS
 * 思路：先拿空数组作为第一层，然后遍历第一层，
 * 逐个添加元素进去。依次循环，不断的遍历上一层，依次添加元素
 * 直到没有再多的元素加进去了。
 *
 * 参考：https://leetcode.com/problems/subsets/discuss/753020/JAVA-Simple-Solution%3A-Subsets-(BFS)
 *
 * Time Complexity: O(2 ^ n)
 * Space Complexity: O(2 ^ n)
 */
var subsets = function(nums) {
  const ret = [[]]

  for(let i = 0; i < nums.length; i++) {
    const size = ret.length
    for(let j = 0; j < size; j++) {
      const cur = [...ret[j]]
      cur.push(nums[i])
      ret.push(cur)
    }
  }

  return ret
}

subsets([1,2,3])
// @lc code=end

