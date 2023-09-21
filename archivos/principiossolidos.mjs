
import fetch from 'node-fetch'

// class A{

//   constructor(url, element) {
//     this.url = url
//     this.element = element
//   }

//   async get() {
//     const response = await fetch(this.url)
//     const json = await response.json()
//     return json
//   }

//   print(data) {
//      console.log(data)
//   }
// }

class A{

  constructor(url) {
    this.url = url
  }

  async get() {
    const response = await fetch(this.url)
    const json = await response.json()
    return json
  }
}

class DomPrinter{
  constructor(element) {
    this.element = element
  }

  print(data) {
    console.log(data)
  }
}

class DomFormatterPrinter extends DomPrinter {
  constructor(element) {
    super(element)
  }

  print(data) {
    const text = data.reduce((acomulador, e) => acomulador + e.title, '')
    super.print(text)
  }
}


(async ()=>{
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const request = new A(url)
  const domPrinter = new DomPrinter('hola a todos')
  // const domPrinter = new DomFormatterPrinter('hola a todos')
  const data = await request.get()
  const text = data.reduce((acomulador, e) => acomulador + e.title, '')
  domPrinter.print(text)
})()

