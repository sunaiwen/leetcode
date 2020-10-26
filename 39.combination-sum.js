/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (53.63%)
 * Likes:    3117
 * Dislikes: 98
 * Total Accepted:    477K
 * Total Submissions: 889.3K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 思路一：一点都不清晰，大概就是分整除、不能整除、刚好相等几种情况。为了补漏，到后面又递归一次………
 * 只击败 5% 的人……
 */

// DFS
// 思路：把这道题目变成 search 的角度去看。把所有的可能性展开为一棵树。
// 2 作为根展开后，3 展开的树将不包含 2，6 也是如此。这样可以保证 2 那里
// 查询过的所有结果中，可以向后包含，但是 3 的树查询的结果不会包含 2.
// 这样的作用是，防止重复查询。

var combinationSum = function(candidates, target) {
  const ret = []
  search([], candidates, target, ret)
  return ret
}

function search(cur, candidates, target, ret) {
  for(let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i]
    if(candidate < target) {
      search(cur.concat([candidate]), candidates.slice(i), target - candidate, ret)
    } else if(candidate > target) {
      continue
    } else {
      ret.push(cur.concat([candidate]))
    }
  }
}

function sum(list) {
  let ret = 0
  for(let i = 0; i < list.length; i++) {
    ret += list[i]
  }
  return ret
}

//test
console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)))

// @lc code=end

