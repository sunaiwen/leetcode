/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 *
 * https://leetcode.com/problems/longest-word-in-dictionary/description/
 *
 * algorithms
 * Easy (46.21%)
 * Likes:    480
 * Dislikes: 589
 * Total Accepted:    50.2K
 * Total Submissions: 107K
 * Testcase Example:  '["w","wo","wor","worl","world"]'
 *
 * Given a list of strings words representing an English Dictionary, find the
 * longest word in words that can be built one character at a time by other
 * words in words.  If there is more than one possible answer, return the
 * longest word with the smallest lexicographical order.  If there is no
 * answer, return the empty string.
 * 
 * Example 1:
 * 
 * Input: 
 * words = ["w","wo","wor","worl", "world"]
 * Output: "world"
 * Explanation: 
 * The word "world" can be built one character at a time by "w", "wo", "wor",
 * and "worl".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 
 * words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * Output: "apple"
 * Explanation: 
 * Both "apply" and "apple" can be built from other words in the dictionary.
 * However, "apple" is lexicographically smaller than "apply".
 * 
 * 
 * 
 * Note:
 * All the strings in the input will only contain lowercase letters.
 * The length of words will be in the range [1, 1000].
 * The length of words[i] will be in the range [1, 30].
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */

 /* 
  思路：构建一棵 trie 树，做好 word 末尾的标记。在实例里，
  因为 banana 这个单词只有一个，所以它的子 trie 树只有末尾才有标记。
  因为用 dfs 遍历，所以永远都没机会到它的末尾的节点了。
  只能是 apple 的子 trie 树有机会被遍历到。

  备注：这只是 trie 的一个应用场景，还有其他场景的。
 */
var longestWord = function(words) {
  const trie = new Trie()
  trie.words = words

  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i], i)
  }

  return trie.dfs()
};

class Trie {
  constructor (words) {
    this.root = new TreeNode('')
    this.words = words
  }

  insert (char, index) {
    let curNode = this.root
    for (let i = 0; i < char.length; i++) {
      const c = char.charAt(i)
      if (curNode.children.has(c) === false) {
        const node = new TreeNode(c)
        curNode.children.set(c, node)
      }
      curNode = curNode.children.get(c)
    }
    curNode.index = index
  }

  dfs () {
    let longestWord = ''
    const stack = [this.root]

    while (stack.length > 0) {
      const node = stack.pop()

      if (node === this.root || node.index >= 0) {
        if (node !== this.root) {
          const word = this.words[node.index]
          if (word.length > longestWord.length) {
            longestWord = word
          } else if (word.length === longestWord.length) {
            if (word < longestWord) {
              longestWord = word
            }
          }
        }

        for (let [ key, val ] of node.children) {
          stack.push(val)
        }
      }
    }

    return longestWord
  }
}

function TreeNode (char) {
  this.children = new Map()
  this.val = char
}

longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
// @lc code=end
