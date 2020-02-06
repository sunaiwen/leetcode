/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (62.76%)
 * Likes:    1929
 * Dislikes: 63
 * Total Accepted:    682.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its depth = 3.
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 思路：广度遍历，利用一个队列，后进后出，就能达到先遍历父层，后面再遍历子层的目的。
 */
var maxDepth = function(root) {
  const list = []

  if (root) {
    list.push(root)
  }

  let depth = 0
  while (list.length > 0) {
    depth += 1
    let curLen = list.length
    for (let i = 0; i < curLen; i++) {
      const node = list.shift()
      if (node.left) {
        list.push(node.left)
      }
      if (node.right) {
        list.push(node.right)
      }
    }
  }

  return depth
}
// @lc code=end
