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
 */
var combinationSum = function(candidates, target, map = {}) {
    candidates = candidates.sort()
    const collection = []
    const len = candidates.length

    for (let i = 0; i < len; i++) {
      map[candidates[i]] = true
    }

    for (let i = len - 1; i >= 0; i--) {
      const val = candidates[i]
      if (target < val) {
        continue
      }

      if (target === val) {
        collection.push([val])
      } else {
        const left = target % val

        if (left === 0) {
          const cnt = target / val
          collection.push(newRepeatElArray(val, cnt))
        } else if (map[left]) {
          const cnt = (target - left) / val
          const arr = newRepeatElArray(val, cnt)
          if (left > val) {
            arr.push(left)
          } else {
            arr.unshift(left)
          }
          collection.push(arr)
          console.log(arr, 'else if')
        }

        const subCollection = combinationSum(candidates, target - val)

        for (let i = 0; i < subCollection.length; i++) {
          const newList = subCollection[i]
          newList.push(val)
          newList.sort(function (a, b) { return a - b })
          if (has(collection, newList) === false) {
            collection.push(newList)
          }
        }
      } 
    }

    return collection
};

function newRepeatElArray (val, len) {
  let arr = []

  for (let i = 0; i < len; i++) {
    arr.push(val)
  }
  return arr
}

function has (collections, arr) {
  for (let i = collections.length - 1; i >= 0; i--) {
    const curArr = collections[i]
    let same = true
    if (curArr.length !== arr.length) {
      continue
    }
    for (let j = 0; j < curArr.length; j++) {
      if (curArr[j] !== arr[j]) {
        same = false
      }
    }

    if (same === true) {
      return true
    }
  }

  return false
}

//test
console.log(JSON.stringify(combinationSum([3,12,9,11,6,7,8,5,4], 15)))

// @lc code=end

