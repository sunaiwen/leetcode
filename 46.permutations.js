/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// bfs

 // dfs
var permute = function(nums) {
  if(!nums || nums.length === 0) {
    return []
  }
  const ret = []
  combind([], nums, ret)
  return ret
};

function combind(cur, nums, ret) {
  if(nums.length === 1) {
    ret.push(cur.concat(nums))
    return
  }
  for(let i = 0; i < nums.length; i++) {
    combind(cur.concat([nums[i]]), nums.slice(0, i).concat(nums.slice(i + 1)), ret)
  }
}

console.log(JSON.stringify(permute([1, 2, 3])))

// @lc code=end

