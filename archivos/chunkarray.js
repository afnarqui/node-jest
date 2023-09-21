// Implementa una función chunkArray() que tome como argumento un array y
//  un número entero positivo size y divida el array en varios subarrays de longitud size.
// Si el último subarray resultante es menor que size, se debe rellenar con el valor null
// hasta alcanzar size elementos.

function chunkArray(arr, size) {
  const chunks = [];
  let index = 0;

  while (index < arr.length) {
    chunks.push(arr.slice(index, index + size).concat(Array(Math.max(size - arr.slice(index, index + size).length, 0)).fill(null)));
    index += size;
  }

  return chunks;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkArray(arr, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, null]]
