/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let currentLevel = [root]
  let ret = []
  while(currentLevel.length > 0) {
    let curLevelLen = currentLevel.length
    let curLevelRet = []
    for (let i = 0; i < curLevelLen; i++) {
      const node = currentLevel.shift()
      if(node.left) {
        currentLevel.push(node.left)
      }
      if (node.right) {
        currentLevel.push(node.right)
      }
      curLevelRet.push(node.value)
    }
    ret.push(curLevelRet)
  }

  return ret
};

// const a2t = require('./utils/arrayToTree')
// console.log(levelOrder(a2t([3,9,20,null,null,15,7])))
// @lc code=end

