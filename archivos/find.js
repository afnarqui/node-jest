// find(): El método find() devuelve el primer elemento de un array que cumple con una condición específica.
//Si no se encuentra ningún elemento que cumpla con la condición, se devuelve undefined.

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find((number) => {
  return number % 2 === 0;
});

console.log(evenNumber); // Output: 2

//En este ejemplo, find() se utiliza para encontrar el primer número par en el array numbers. Devuelve el primer número encontrado que cumple con la condición, que es 2.

// Estos métodos son muy útiles para realizar operaciones específicas en arrays, como reducir, verificar si todos los elementos cumplen con una condición, verificar si al menos un elemento cumple con una condición y encontrar elementos específicos dentro de un array.
