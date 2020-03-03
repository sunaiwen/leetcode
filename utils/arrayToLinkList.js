module.exports = function (arr) {
  let start
  let prev
  
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i])
    if (i ===0) {
      start = node
    }

    if (prev) {
      prev.next = node
    }
    prev = node
  }

  return start
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

