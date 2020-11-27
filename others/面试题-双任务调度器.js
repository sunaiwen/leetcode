/*
 * JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出。
 * 扩充 Scheduler 的 add 方法以达到题目要求。

 * output: 2 3 1 4
 * 一开始，1、2两个任务进入队列
 * 500ms时，2完成，输出2，任务3进队
 * 800ms时，3完成，输出3，任务4进队
 * 1000ms时，1完成，输出1
 * 1200ms时，4完成，输出4
*/


// 这道题最难的地方是要意识到 resolve 是可以传去别的地方存起来的，
// 即可以在 Promise 的回调函数之外去调用它。
// 思路不被这一点限制之后，就豁然开朗了。
class Scheduler {
  constructor() {
    this.runningCount = 0
    this.waitingQueue = []
  }

  add(promiseCreator) {
    return new Promise((resolve) => {
      if(this.runningCount < 2) {
        this.run(promiseCreator, resolve)
      } else {
        this.waitingQueue.push({
          promiseCreator,
          resolve
        })
      }
    })
  }

  run(promiseCreator, resolve) {
    this.runningCount += 1
    promiseCreator()
      .then(() => {
        resolve()
        this.runningCount -= 1
        if(this.runningCount < 2) {
          const nextTask = this.waitingQueue.shift()
          if(!nextTask) {
            return
          }

          const {promiseCreator, resolve} = nextTask
          this.run(promiseCreator, resolve)
        }
      })
  }
}

function timeout(time){
  return new Promise(resolve=>{
      setTimeout(resolve,time)
  })
}


const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler
    .add(function() {
      return timeout(time)
    })
    .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')