/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 使用 merge sort
 */
var sortArray = function(nums) {
  sort(nums, 0, nums.length - 1)
  return nums
};

function sort(arr, lo, hi) {
  if(hi <= lo) {
    return
  }
  const mid = lo + Math.floor((hi - lo) / 2)
  sort(arr, lo, mid)
  sort(arr, mid + 1, hi)
  merge(arr, lo, mid, hi)
}

function merge(arr, lo, mid, hi) {
  const tmp = []
  for(let i = lo; i <= hi; i++) {
    tmp[i] = arr[i]
  }

  let i = lo
  let j = mid + 1
  for(let k = lo; k <= hi; k++) {
    if(i > mid) {
      arr[k] = tmp[j++]
    } else if(j > hi) {
      arr[k] = tmp[i++]
    } else if(tmp[j] < tmp[i]) {
      arr[k] = tmp[j++]
    } else {
      arr[k] = tmp[i++]
    }
  }
}

// console.log(sortArray([5,1,1,2,0,0]))

// @lc code=end

