/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.48%)
 * Likes:    4730
 * Dislikes: 561
 * Total Accepted:    677.2K
 * Total Submissions: 2.7M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路：启用三个指针，两个指针分别在两头，中间的指针在两头指针之间扫荡，直到知道符合的为止。
 * 如果找到符合的了，要看看两个指针左边或者右边的元素是否相等，如果相等，就没必要再找了，因为不管是需要重复值还是需要一个值的情况都不再需要了。
 * n^2 的时间复杂度
 */

var threeSum = function(nums) {
  nums = quicksort(nums)
  const len = nums.length

  if (nums.length < 3) {
    return []
  }

  if (nums[0] === nums[len - 1]) {
    if (nums[0] === 0) {
      return [nums.slice(0, 3)]
    } else {
      return []
    }
  }

  const collection = []

  for (let l = 0; l < len - 2; l++) {
    let m = l + 1
    let r = len - 1

    if (nums[l] === nums[l - 1]) {
      continue
    }

    while (m < r) {
      const sum = nums[l] + nums[m] + nums[r]
      if (sum > 0) {
        r -= 1
      } else if (sum < 0) {
        m += 1
      } else {
        collection.push([nums[l], nums[m], nums[r]])
        while (nums[m] === nums[m + 1]) {
          m += 1
        }
        while (nums[r] === nums[r - 1]) {
          r -= 1
        }
        m += 1
        r -= 1
      }
    }
  }

  return collection
};

function quicksort (nums) {
  sort(nums, 0, nums.length - 1)
  return nums
}

function sort (nums, lo, hi) {
  if (hi <= lo) {
    return
  }
  const j = partition(nums, lo, hi)
  if (j > 1) {
    sort(nums, lo, j - 1)
  }
  sort(nums, j + 1, hi)
}

function partition (nums, lo, hi) {
  let i = lo
  let j = hi + 1
  let v = nums[lo]

  while (true) {
    while (nums[++i] < v) {
      if (i === hi) {
        break
      }
    }
    while (nums[--j] > v) {
      if (j === lo) {
        break
      }
    }

    if (i >= j || i >= hi || j <= lo) {
      break
    }
    extrange(nums, i, j)
  }

  extrange(nums, lo, j)
  return j
}

function extrange (nums, a, b) {
  const tmp = nums[a]
  nums[a] = nums[b]
  nums[b] = tmp
}

// console.log(JSON.stringify(threeSum([-2,0,0,2,2])))
// @lc code=end

