import fetch from 'node-fetch';

class Queue {

  #items = []

  enqueue(item) {
    this.#items.push(item)
  }

  dequeue() {
    return this.#items.shift()
  }

  isEmpty() {
    return this.#items.length === 0
  }
}

function promiseWaiting(time, message) {
  return () => {
    return  new Promise((res,rej) => {
      setTimeout(() => {
        res(message)
      }, time);
    })
  }
}

function fetchWaiting(url) {
  return async () => {
    await new Promise(r => setTimeout(r, 1000))
    return fetch(url).then(res => res.json())
  }
}

const queue = new Queue()

queue.enqueue([promiseWaiting(3000, 'p1'), (data)=> console.log(data)])
queue.enqueue([promiseWaiting(1000, 'p2'), (data)=> console.log(data)])
queue.enqueue([
  fetchWaiting('https://jsonplaceholder.typicode.com/todos/15'),
  (data) => console.log(data)
  // (data) => document.getElementById('content').innerHTMl += `<p>${data.title}</p>`
])
// queue.enqueue(
//   new Promise((res,rej) => {
//     setTimeout(() => {
//       res('promesa 1')
//     }, 3000);
//   })
// )

// queue.enqueue(
//   new Promise((res,rej) => {
//     setTimeout(() => {
//       res('promesa 2')
//     }, 2000);
//   })
// )

run()

// async function run() {
//   while(!queue.isEmpty()) {
//     const fn = queue.dequeue()
//     const data = await  fn()
//     console.log(data)
//   }
// }
async function run() {
  while(!queue.isEmpty()) {
    const res = queue.dequeue()
    const data = await  res[0]()
    res[1](data)
  }
}

// closures regresa una function y mantiene el estado para ejecutar la nueva function
