/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * DFS
 * 思路：和 39 差不多，就是每层搜索，但不同的是，为了保证符合题意的无重复元素，
 * 所以必须先排序，如果相邻的相同的数字，且那个数字被推到一个集合里作为结果后，
 * 要做判断，跳过后面所有相同的数字，否则会出现重复。
 *
 * 时间复杂度：2^n，给数组挂一个根结点，将其变成一棵树，会发现左右节点就是不选这个就选那个的关系，
 * 如果把这棵树完全展开，一个长度为 5 的数组，最多能展开五层，到了第五层的计算量就是第一层的 2^5 倍，
 * 由此得出，如果输入的数组长度为 n，时间复杂度为 2^n。
 */
var combinationSum2 = function(candidates, target) {
  const ret = []

  search(
    [],
    candidates.sort(),
    target,
    ret,
    0
  )
  return ret
};

function search(current, candidates, target, ret, startIdx) {
  if(target === 0) {
    ret.push([...current])
    return
  }

  for(let i = startIdx; i < candidates.length; i++) {
    const candidate = candidates[i]
    if(i > startIdx && candidate === candidates[i - 1]) {
      continue
    }
    if(candidate > target) {
      return
    }
    current.push(candidate)
    search(current, candidates, target - candidate, ret, startIdx + 1)
    current.pop()
  }
}

console.log(JSON.stringify(combinationSum2([2,5,2,1,2], 5)))
// @lc code=end

