module.exports = function quicksort (nums) {
  sort(nums, 0, nums.length - 1)
  return nums
}

function sort (nums, lo, hi) {
  if (hi <= lo) {
    return
  }
  const j = partition(nums, lo, hi)
  sort(nums, lo, j - 1)
  sort(nums, j + 1, hi)
}

function partition (nums, lo, hi) {
  let i = lo + 1
  let j = hi
  let v = nums[lo]

  while (true) {
    while (nums[i] < v) {
      i += 1
    }
    while (nums[j] > v) {
      j -= 1
    }

    if (i >= j || i >= hi || j <= lo) {
      break
    } else {
      extrange(nums, i, j)
    }
  }

  extrange(nums, lo, j)
  return j
}

function extrange (nums, a, b) {
  const tmp = nums[a]
  nums[a] = nums[b]
  nums[b] = tmp
}
