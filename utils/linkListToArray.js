module.exports = function (node) {
  const ret = []
  while (node) {
    ret.push(node.val)
    node = node.next
  }

  return ret
}