/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 * 思路：里面比较难的问题是，怎么辨别过访问过的节点？这里用了一个比较傻的办法，用一个数组记录所有访问过的节点。
 * 但是这样却能打败 88.54% 的 memory usage? 有点搞不懂。
 * 我这个实现方法的时间复杂度是……推不出来……
 */
var pathSum = function (root, sum) {
  if (!root) {
    return []
  }
  const ret = []
  const stack = [root]
  const sumStack = [sum]
  const visitRecord = []

  while (stack.length > 0) {
    const node = stack[stack.length - 1]
    const sum = sumStack[stack.length - 1]
    const curSum = sum - node.val
    visitRecord.push(node)
    if (!node.left && !node.right) {
      if(curSum === 0) {
        ret.push(stack.map(node => node.val))
      }
      stack.pop()
      sumStack.pop()
    } else {
      if (node.left && visitRecord.includes(node.left) === false) {
        const leftNode = node.left
        stack.push(leftNode)
        sumStack.push(curSum)
      } else if (node.right && visitRecord.includes(node.right) === false) {
        const rightNode = node.right
        stack.push(rightNode)
        sumStack.push(curSum)
      } else {
        stack.pop()
        sumStack.pop()
      }
    }
  }

  return ret
}

// test
// const arrayToTree = require('./utils/arrayToTree.js')
// const ret = pathSum(arrayToTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22)
// console.log(JSON.stringify(ret))

// @lc code=end

