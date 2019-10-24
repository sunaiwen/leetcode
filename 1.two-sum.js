/*
 * @lc app=leetcode id=1 lang=javascript
 * @desc 用 hash table 解决这个问题
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
  const map = {}
  const ret = []

  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (typeof map[nums[i]] !== 'undefined') {
      map[nums[i]] = [map[nums[i]]]
      map[nums[i]].push(i)
    } else {
      map[nums[i]] = i
    }
  }

  for (let i = 0; i < len; i++) {
    const left = target - nums[i]

    if (typeof map[left] !== 'undefined' && map[left] !== i) {
      if (typeof map[left] === 'object') {
        for (let j = 0; j < map[left].length; j++) {
          if (map[left][j] !== i) {
            ret.push(map[left][j])
            break
          }
        }
      } else {
        ret.push(map[left])
      }
    }
  }

  return ret
}

