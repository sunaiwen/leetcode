// 假设这是物品列表
const itemList = [
  {
    weight: 2,
    value: 3
  },
  {
    weight: 1,
    value: 2
  },
  {
    weight: 3,
    value: 4
  },
  {
    weight: 2,
    value: 2
  }
]

// 递归解法，从上到下, so call topToBottom
function topToBottom (totalWeight) {
  const cache = initArray(itemList.length, itemList.length * 2)
  function resolve (availableWeight, index) {
    if (index > itemList.length - 1) {
      return 0
    }

    const currentItem = itemList[index]
    if (availableWeight < currentItem.weight) {
      return 0
    }

    if (cache[index][availableWeight] > 0) {
      return cache[index][availableWeight]
    }

    const choosedValue = resolve(availableWeight - currentItem.weight, index + 1) + currentItem.value
    const notChoosedValue = resolve(availableWeight, index + 1)
    const result = Math.max(choosedValue, notChoosedValue)
    cache[index][availableWeight] = result
    return result
  }

  return resolve(totalWeight, 0)
}

// function backpackBottomToTop (totalWeight) {
//   const cache = initArray(itemList.length, totalWeight) // 初始化二维数组
//   let maxValue = 0

//   for (let currentWeight = 1; currentWeight <= totalWeight; currentWeight++) {
//     for (let i = 0; i < itemList.length; i++) {
//       const item = itemList[i]

//       if (currentWeight >= item.weight) {
//         if (i === 0) {
//           cache[i][currentWeight] = item.value
//           continue
//         }

//         let choosedValue = item.value + (cache[i - 1][currentWeight - item.weight] || 0) // 选择的话，价值 = 当前物品价值 + 剩余空间的最大价值
//         let notChoosedValue = maxValue // 不选的话，维持之前的最大价值

//         let currentValue = Math.max(choosedValue, notChoosedValue)
//         cache[i][currentWeight] = currentValue

//         if (currentValue > maxValue) {
//           maxValue = currentValue
//         }
//       }
//     }
//   }

//   return maxValue
// }

function initArray (rows, columns) {
  const arr = []
  for (let i = 0; i < rows; i++) {
    let subArr = []
    for (let j = 0; j < columns; j++) {
      subArr[j] = 0
    }
    arr[i] = subArr
  }

  return arr
}

console.log(topToBottom(5))
