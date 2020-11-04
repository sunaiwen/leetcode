/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 思路：其实遍历所有的可能性很容易，但我还是想不出来怎么排除相同元素导致的
 * 相同组合，看了一下别人的代码，居然只需要 i > 0 && nums[i] === nums[i - 1]
 * 判断一下即可。
 *
 * 其实想想确实是这样……前面的元素带来的组合结果，后面的元素都不再介入即可。
 *
 * 当然这个方法的缺点就是要先排序.
 *
 * Time Complexity:
 */
var permuteUnique = function(nums) {
  const ret = []
  dfs(nums.sort(), [], ret)
  return ret
};

function dfs(nums, cur, ret) {
  if(nums.length === 0) {
    ret.push([...cur])
    return
  }
  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    cur.push(nums[i])
    dfs(nums.slice(0, i).concat(nums.slice(i + 1)), cur, ret)
    cur.pop()
  }
}

// permuteUnique([1,1,2])
// @lc code=end

