/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 // note: 重点是有前后两个指针，然后考虑两个指针两边的四个区间。

var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    let numToInsert = nums2[i]

    if (m === 0) {
      nums1[i] = numToInsert
      continue
    }

    for (let low = 0, hi = m + i - 1; hi >= low; low++, hi--) {
      if (numToInsert <= nums1[low]) {
        nums1.splice(low, 0, numToInsert)
        if (n - i > 0) {
          nums1.pop()
        }
        break
      }
      
      if (numToInsert >= nums1[hi]) {
        nums1.splice(hi + 1, 0, numToInsert)
        if (n - i > 0) {
          nums1.pop()
        }
        break
      }

      if (nums1[low] < numToInsert && numToInsert <= nums1[low + 1]) {
        nums1.splice(low + 1, 0, numToInsert)
        if (n - i > 0) {
          nums1.pop()
        }
        break
      }

      if (nums1[hi - 1] <= numToInsert && numToInsert < nums1[hi]) {
        nums1.splice(hi, 0, numToInsert)
        if (n - i > 0) {
          nums1.pop()
        }
        break
      }
    }
  }
};

// @lc code=end

