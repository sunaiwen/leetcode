/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 这道题没自己想出来，看得是 discussion 里面高票的回答。
 */

var merge = function(intervals) {
  if (intervals.length === 0) {
    return intervals
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })

  let tmp = intervals[0]
  let result = [tmp]
  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i]
    if (tmp[1] >= cur[0]) {
      tmp[1] = Math.max(cur[1], tmp[1])
    } else {
      tmp = cur
      result.push(tmp)
    }
  }

  return result
};

// merge([[1,3],[2,6],[8,10],[15,18]])
// @lc code=end

