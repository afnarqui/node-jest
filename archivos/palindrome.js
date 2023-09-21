// ¡Por supuesto! Aquí tienes un problema de entrevista avanzada en Node.js junto con su solución:

// Problema: Implementa una función llamada isPalindrome() que tome una cadena de texto como argumento
//y devuelva true si la cadena es un palíndromo y false en caso contrario. Un palíndromo es una palabra, frase,
// número o cualquier otra secuencia de caracteres que se lee igual hacia adelante y hacia atrás,
//ignorando el espacio, puntuación y mayúsculas/minúsculas.

// Ejemplo de entrada y salida esperada:

function isPalindrome(str) {
  // Eliminar espacios, puntuación y convertir todo a minúsculas
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Comprobar si la cadena invertida es igual a la cadena original
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("Hello World")); // Output: false
console.log(isPalindrome("A man, a plan, a canal. Panama")); // Output: true


// function isPalindrome(word) {

// 	word = word.replace(/\s/g, '');
// 	const lowered = word.toLowerCase();
// 	const splitted = lowered.split('');
// 	const reversed = splitted.reverse();
// 	const joined = reversed.join('');

// 	return lowered == joined;
// }
