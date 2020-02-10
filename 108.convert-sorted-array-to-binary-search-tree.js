/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (53.45%)
 * Likes:    1784
 * Dislikes: 174
 * Total Accepted:    342.6K
 * Total Submissions: 624.6K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 *  思路：为了取得平衡的二叉树，拿出每个数组的中点做根节点。不停的递归这个过程，直到只有一个节点或者没有节点为止。
 */
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
      return null
    } else if (nums.length === 1) {
      return new TreeNode(nums[0])
    }

    let midPoint = Math.floor((nums.length - 1) / 2)
    let node = new TreeNode(nums[midPoint])

    node.left = sortedArrayToBST(nums.slice(0, midPoint))
    node.right = sortedArrayToBST(nums.slice(midPoint + 1))

    return node
};

// @lc code=end

