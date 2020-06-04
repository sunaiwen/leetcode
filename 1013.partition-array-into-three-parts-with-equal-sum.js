/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 * 思路：整个数组的和必定可以分成想到三份，也就是可以被 3 整除，如果不能，那肯定没办法分成等分三份。
 * 如果能被 3 整除，再看能不能找到相邻的三份子数组，和是等于 sum / 3 的。如果能找到，才返回 true。
 * 不能找到，仍然返回 false。
 * 
 * 所以这道题返回 true 的条件是，数组和能被 3 整除，且能分成相邻的三个和为 sum / 3 的子数组。
 */

var canThreePartsEqualSum = function(A) {
  const sum = getSum(A)

  if (A.length < 3) {
    return false
  }

  if (sum % 3 !== 0) {
    return false
  }

  const equalPart = sum / 3
  let leftPointer = 0
  let rightPointer = A.length - 1
  let leftSum = A[leftPointer]
  let rightSum = A[rightPointer]
  
  while (leftPointer < rightPointer) {
    if (leftSum === equalPart && rightSum === equalPart) {
      return equalPart === getSum(A.slice(leftPointer + 1, rightPointer))
    }
    if (leftSum != equalPart) {
      leftPointer++
      leftSum += A[leftPointer]
    }
    if (rightSum != equalPart) {
      rightPointer--
      rightSum += A[rightPointer]
    }
  }
  
  return false
};

function getSum (arr) {
  if (arr.length === 0) {
    return Number.MAX_VALUE
  }
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

// console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]))
// @lc code=end

