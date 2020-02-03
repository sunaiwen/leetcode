/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (44.84%)
 * Likes:    3106
 * Dislikes: 72
 * Total Accepted:    528.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 *
 * But the following [1,2,2,null,3,null,3] is not:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 * 思路：递归检测对称的那两个子树是否相等。
 * 值得注意的是，在遍历最上层的时候，遍历的方向就已经呈两端走了，所以越到最下面，方向
 * 也是分『八』字这样走。
 * 或者可以这样想，递归就是把大问题拆成小问题，其实验证对称性，就是验证两端是否相等。
 */
// var isSymmetric = function(root) {
//   if (root == null) {
//     return true
//   }
//   return isMirror(root.left, root.right)
// }

// function isMirror (n1, n2) {
//   if (n1 == null && n2 == null) {
//     return true
//   }

//   if (n1 == null || n2 == null) {
//     return false
//   }

//   if (n1.val !== n2.val) {
//     return false
//   }

//   return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left)
// }

var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const queue = []
  queue.push(root.left)
  queue.push(root.right)

  while(queue.length > 0) {
    var n1 = queue.pop()
    var n2 = queue.pop()

    if (n1 == null && n2 == null) {
      continue
    }

    if ((n1 == null || n2 == null)) {
      return false
    }

    if (n1 && n2 && (n1.val !== n2.val)) {
      return false
    }

    queue.push(n1.left)
    queue.push(n2.right)
    queue.push(n1.right)
    queue.push(n2.left)
  }

  return true
}
// @lc code=end
