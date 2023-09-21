/*
se tiene un arreglo myArray que contiene bloques de números. Los bloques pueden ser de
cualquier largo, los números contenidos están en el rango de 1 a 9 y se separan por un cero
para definir los bloques. Se deben ordenar los números de los bloques individualmente de
menor a mayor e imprimir las secuencias separando los bloques por un espacio
*/
/**
 *
 * Primero, definiremos la función orderBlocks que tomará como parámetro el arreglo myArray
 * y retornará el arreglo ordenado. Dentro de esta función, crearemos variables para almacenar
 * los bloques y el arreglo ordenado.
 */
function orderBlocks(myArray) {
let blocks = [[]];
let orderedArray = [];

// Separar los bloques del arreglo original
for (let num of myArray) {
  if (num === 0) {
    blocks.push([]);
  } else {
    blocks[blocks.length - 1].push(num);
  }
}

// Ordenar cada bloque individualmente
for (let block of blocks) {
  block.sort((a, b) => a - b);
  console.log('block.sort', block)
  orderedArray = orderedArray.concat(block);
  console.log('orderedArray', orderedArray)
}

return orderedArray;
}

/**
 * A continuación, definiremos la función printSequences que tomará el arreglo ordenado y lo imprimirá separando los bloques
 * por un espacio.
 */

function printSequences(orderedArray) {
  let sequences = [];
  let currentSequence = [];

  for (let num of orderedArray) {
    if (num === 0) {
      sequences.push(currentSequence.join(" "));
      currentSequence = [];
    } else {
      currentSequence.push(num);
    }
  }

  sequences.push(currentSequence.join(" "));

  console.log(sequences.join(" "));
}

/**
 * Por último, llamaremos a las funciones orderBlocks y printSequences
 * para obtener el resultado final.
 */

// const myArray = [3, 2, 1, 0, 9, 4, 7, 5, 0, 8, 6];
const myArray = [1,3,2,0,7,8,1,3,0,6,7,1];
const orderedArray = orderBlocks(myArray);
printSequences(orderedArray);

// 123 1378 167
