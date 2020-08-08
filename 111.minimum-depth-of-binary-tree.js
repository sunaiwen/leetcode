/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }
  const arr = [root]
  let depth = 1

  while(arr.length) {
    let levelLength = arr.length
    for (let i = 0; i < levelLength; i++) {
      const node = arr.shift()
      if (!node.left && !node.right) {
        return depth
      }
      if (node.left) {
        arr.push(node.left)
      }
      if (node.right) {
        arr.push(node.right)
      }
    }
    depth += 1
  }
};
// @lc code=end

