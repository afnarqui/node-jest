// slice(): El método slice() devuelve una copia superficial de una porción de un array
//  en un nuevo array. No modifica el array original.

const fruits = ['apple', 'banana', 'orange', 'mango'];

const citrusFruits = fruits.slice(2);

console.log(citrusFruits); // Output: ['orange', 'mango']
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']
