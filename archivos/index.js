// globalThis.console.log('hola, mundo')
// globalThis.console.log(globalThis)

//CommonJs require Module
// const {suma} = require('./sum')
// import {sum} from './sum.mjs'

// console.log(sum(1,2))

// const os = require('node:os')

// console.log('Información del sistema operativo:')
// console.log('-------------------')

// console.log('Nombre del sistema operativo', os.platform())
// console.log('Versión del sistema operativo', os.release())
// console.log('Arquitectura', os.arch())
// console.log('CPUs', os.cpus())
// console.log('Memoria libre', os.freemem() / 1024 / 1024)
// console.log('Memoria total', os.totalmem() / 1024 / 1024)
// console.log('uptime', os.uptime() / 60 / 60)

// let cadena = 'andres'
// console.log(cadena)
// let nuevacadena = cadena.split('').reverse().join('')
// console.log(nuevacadena)
// let nuevacadenaDos = ''
// for(let c of cadena) {
//     nuevacadenaDos = c + nuevacadenaDos
// }
// console.log(nuevacadenaDos)

// const numbers = [1,1,5,2,6,100,100,2,5,5,5,100]
// console.log(numbers)
// const result = [...new Set(numbers)
// ].map(num=>{
//     return {
//         element: num,
//         count: numbers.filter(n => n === num).length
//         }
// })

// console.log(result)

// const numbersDos = [1,1,5,2,6,100,100,2,5,5,5,100]
// const resultDos = []
// for(const num of numbersDos) {
//     let nuevoElemento = true
//     for(const res of resultDos) {
//         if(res.element == num ) {
//             res.count++
//             nuevoElemento = false
//         }
//     }

//     if(nuevoElemento) {
//         resultDos[resultDos.length] = {
//             element: num,
//             count: 1
//         }
//     }
// }

// console.log(resultDos)

// const words = 'pato perro aguila     oso    gato'
// const array = words.replace(/\s+/g, ' ').split(' ')
// console.log(array)
// const arrayDos = []
// let w = ''

// for(const c of words) {
//     if(c !== ' ') {
//         w +=c
//     } else if(w.length > 0) {
//         arrayDos[arrayDos.length] = w
//         w = ''
//     }
// }

// if(w.length > 0) {
//     arrayDos[arrayDos.length] = w
//     w = ''
// }
// console.log(arrayDos)



