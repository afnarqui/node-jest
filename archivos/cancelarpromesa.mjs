import fetch from 'node-fetch'

const requestPromise = function(count, controllerAbort) {

  let url = 'https://jsonplaceholder.typicode.com/todos/'

  return new Promise(async (resolve,reject) => {

    let content = ''

    controllerAbort.signal.addEventListner('abort', () => reject())

    for(let i = 1; i <= count; i++) {

      const result = await fetch(url + i)
      const json= await result.json()
      content+= json
      console.log(content)
    }
    resolve()


  })
}

controller = new AbortController()
requestPromise(5, controller)

