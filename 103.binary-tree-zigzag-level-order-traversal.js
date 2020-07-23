/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }

  let ret = []
  let queue = [root]
  let left = true
  while  (queue.length > 0) {
    const curLevelVal = queue.map(function (item) {
      return item.val
    })
    ret.push(left ? curLevelVal : curLevelVal.reverse())
    left = !left

    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return ret
};

// const a2t = require('./utils/arrayToTree')
// console.log(zigzagLevelOrder(a2t([3,9,20,null,null,15,7])))

// @lc code=end

