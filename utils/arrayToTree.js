module.exports = function arrayToTree (arr) {
  const queue = []
  const root = new TreeNode(arr.shift())
  queue.push(root)

  while (arr.length > 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      const leftVal = arr.shift()
      const rightVal = arr.shift()

      if (leftVal != null) {
        node.left = new TreeNode(leftVal)
        queue.push(node.left)
      }
      if (rightVal != null) {
        node.right = new TreeNode(rightVal)
        queue.push(node.right)
      }
    }
  }

  return root
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 