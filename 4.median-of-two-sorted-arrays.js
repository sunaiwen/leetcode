/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (26.96%)
 * Likes:    5239
 * Dislikes: 762
 * Total Accepted:    528.4K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let aLen = nums1.length
  let bLen = nums2.length
  const halfLen = Math.ceil((aLen + bLen) / 2)
  const isOdd = ((aLen + bLen) % 2 > 0)

  if (nums1[aLen - 1] <= nums2[0] || (aLen === 0 && bLen > 0)) {
    return handleTwoArrayIsConcat(nums1, nums2)
  }

  if (nums2[bLen - 1] <= nums1[0] || (bLen === 0 && aLen > 0)) {
    return handleTwoArrayIsConcat(nums2, nums1)
  }

  if (aLen < bLen) {
    let temp = nums1
    nums1 = nums2
    nums2 = temp

    temp = aLen
    aLen = bLen
    bLen = temp
  }

  let aMinCount = 0
  let aMaxCount = aLen

  while (aMinCount <= aMaxCount) {
    let aCount = Math.floor((aMinCount + aMaxCount) / 2)
    if (aCount > halfLen) {
      aCount = halfLen
    }
    let bCount = halfLen - aCount
    if (bCount > halfLen) {
      bCount = halfLen
      aCount = 0
    }
    if (bCount > bLen) {
      bCount = bLen
      aCount = halfLen - bCount
    }

    const numberA = nums1[aCount - 1]
    const nextNumberA = aCount < aLen ? nums1[aCount] : undefined
    const numberB = nums2[bCount - 1]
    const nextNumberB = nums2[bCount]

    if (numberA > nextNumberB) {
      aMaxCount = aCount - 1
    } else if (numberB > nextNumberA) {
      aMinCount = aCount + 1
    } else {
      let medianEndNumber
      if (numberA == null) {
        medianEndNumber = numberB
      } else if (numberB == null) {
        medianEndNumber = numberA
      } else {
        medianEndNumber = Math.max(numberA, numberB)
      }

      if (isOdd) {
        return medianEndNumber
      }

      let medianEndNextNumber = nextNumberA == null ? nextNumberB : nextNumberB == null ? nextNumberA : Math.min(nextNumberA, nextNumberB)
      return (medianEndNumber + medianEndNextNumber) / 2
    }
  }
};

function handleTwoArrayIsConcat (nums1, nums2) {
  const aLen = nums1.length
  const bLen = nums2.length
  const halfLen = Math.ceil((aLen + bLen) / 2)
  const isOdd = ((aLen + bLen) % 2 > 0)

  let bCount = halfLen - aLen
  let aCount = aLen
  if (bCount < 0) {
    aCount = halfLen
    bCount = 0
    if (isOdd) {
      return nums1[aCount - 1]
    } else {
      return (nums1[aCount - 1] + nums1[aCount]) / 2
    }
  } else if (bCount === 0) {
    if (isOdd) {
      return nums1[aCount - 1]
    } else {
      return (nums1[aCount - 1] + nums2[0]) / 2
    }
  } else {
    if (isOdd) {
      return nums2[bCount - 1]
    } else {
      return (nums2[bCount - 1] + nums2[bCount]) / 2
    }
  }
}

// console.log(findMedianSortedArrays([1,5,7,9,12,32,44,55, 56,89,120], [12,32,43,53,67,89,100,230,231]))
// console.log(findMedianSortedArrays([1, 2], [-1, 3]))
// console.log(findMedianSortedArrays([2], [1,3,4]))
// console.log(findMedianSortedArrays([4], [1,2,3,5]))
// console.log(findMedianSortedArrays([4], [1,2,3,5,6]))
// console.log(findMedianSortedArrays([1, 3], [2, 4, 5, 6]))
// console.log(findMedianSortedArrays([1,5], [2,3,4,6,7]))
// @lc code=end

