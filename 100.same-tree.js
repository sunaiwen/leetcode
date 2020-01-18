/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (51.13%)
 * Likes:    1575
 * Dislikes: 48
 * Total Accepted:    466.8K
 * Total Submissions: 905.6K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 * 
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 * 
 * Example 1:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * Output: false
 * 
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 思路：粗暴的深度优先递归遍历，其实我不清楚 tree 的遍历能不能通过广度遍历来？
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true
  }

  if (Boolean(p) !== Boolean(q)) {
    return false
  }

  if (p.val !== q.val) {
    return false
  }

  try {
    if (p.left.val !== q.left.val || p.right.val !== q.right.val) {
      return false
    }
  } catch (e) {
    if (Boolean(p.left) !== Boolean(q.left) || Boolean(q.right) !== Boolean(p.right)) {
      return false
    }
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

