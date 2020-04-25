/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (40.37%)
 * Likes:    1212
 * Dislikes: 106
 * Total Accepted:    70K
 * Total Submissions: 172.7K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 
 * Find the length of the longest substring T of a given string (consists of
 * lowercase letters only) such that every character in T appears no less than
 * k times.
 * 
 * 
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is
 * repeated 3 times.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 思路参考这里：https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/discuss/170010/Java-O(n)-Solution-with-Detailed-Explanation-Sliding-Window
 * 实在自己想不出来…
 * 
 * 题意是说有至少 k 次重复的字符的子字符串的长度。一开始我的思路就执着于去找题意描述的 k 次重复的字符的子字符串。
 * 但如果跳出题目标题，其实可以从去找有 n 种字符组成的字符串里，看看有没有复合题意的 k 次重复的字符的子字符串，这个角度出发。
 * 
 * 那第一个循环就可以确定，英文字符一共有 26 种，那就从 1 到 26 去依次从字符串里去找复合有 n 种不同字符组成的子字符串。
 * 其实这样找就已经可以找到所有组合的的子字符串了。
 * 
 * 别忘了，在找子字符串的同时，我们还有一个任务，就是在找到的子字符串里，筛选出复合题意的子字符串。
 * 所以 sliding window 的扩大和缩小的依据是什么？就很明显了：
 * 扩大，在当前的子字符串的字符种类小于当前寻找的种类时。
 * 缩小，当前子字符串的字符种类大于当前寻找的种类时。
 * 
 * 那如何筛选复合题意的子字符串呢？
 * 在滑动窗口的时候，也记录当前达到 k 次重复的字符的种类数目。如果当前只有 n 种字符，达到 k 次重复的字符种类数也是 n，
 * 那就说明当前子字符串里的字符都是达到 k 次重复的。这里可以能有点难以理解，举个例子：
 * 
 * 假设题目给出的 k 是 3，当前子字符串是：aaabbb。
 * 那此时的字符种类 n = 2，k 次重复的字符种类数也是 2. 只有这样，才能符合题意。
 * 如果字符串是 aaabbc，那种类数 n = 3，k 次重复的字符种类数是 2，那说明肯定参杂着另外一个字符，重复次数达不到 k 的。
 * 
 * 时间复杂度：O(26n) = ~O(n)
 */
var longestSubstring = function(s, k) {
  let len = 0

  for (let i = 1; i <= 26; i++) {
    let left = 0
    let right = 0
    let unique = 0
    let reachK = 0
    const countArr = []
    while (right < s.length) {
      const char = s.charAt(right)
      if (unique <= i) {
        let idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!countArr[idx]) {
          countArr[idx] = 1
          unique += 1
        } else {
          countArr[idx] += 1
        }

        if (countArr[idx] === k) {
          reachK += 1
        }
        right += 1
      } else {
        const char = s.charAt(left)
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
        countArr[idx] -= 1
        if (countArr[idx] === 0) {
          unique -= 1
        }
        if (countArr[idx] === k - 1) {
          reachK -= 1
        }
        left += 1
      }

      if (i === unique && unique === reachK) {
        const curLen = right - left
        if (curLen > len) {
          len = curLen
        }
      }
    }
  }

  return len
};

// console.log(longestSubstring('baaabcb', 3))

// @lc code=end

