/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 *
 * 直接看了别人的解法，里面阐述了一种数的遍历方式：
 * 先从当前根节点把所有左节点都加到 stack 中，然后再从左节点的叶子节点开始，返回上一层，
 * 如果有右节点，把右节点当成新的根节点，再重复一次这个过程。
 */
var isValidBST = function(root) {
  let pre
  let stack = []

  while (root != null || stack.length) {
    while(root != null) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    if(pre && pre.val >= root.val) {
      return false
    }
    pre = root
    root = root.right
  }

  return true
};

// test
// const arrayToTree = require('./utils/arrayToTree.js')
// const ret = isValidBST(arrayToTree([10,5,15,null,null,6,20]))
// console.log(JSON.stringify(ret))

// @lc code=end

