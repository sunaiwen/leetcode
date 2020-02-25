/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (39.09%)
 * Likes:    1420
 * Dislikes: 425
 * Total Accepted:    408.4K
 * Total Submissions: 1M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \      \
 * 7    2      1
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 * 思路一：dfs 遍历，直到找到 sum 为止
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }

  let ret = false
  if (root.left) {
    ret = hasPathSum(root.left, sum - root.val)
  }
  if (!ret && root.right) {
    ret = hasPathSum(root.right, sum - root.val)
  }
  if (!root.left && !root.right) {
    ret = sum === root.val
  }

  return ret
};

// test
// const arrayToTree = require('./utils/arrayToTree.js')
// const ret = hasPathSum(arrayToTree([1]), 1)
// console.log(ret)
// @lc code=end

