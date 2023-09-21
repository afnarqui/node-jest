// Implementa una función flattenArray() que tome como argumento un array multidimensional y
// devuelva un array plano con todos los elementos.

// Ejemplo de entrada y salida esperada:

// function flattenArray(arr) {
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       return acc.concat(flattenArray(val));
//     } else {
//       return acc.concat(val);
//     }
//   }, []);
// }

function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8], 9];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
