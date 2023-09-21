// Implementa una función capitalizeFirstLetter() que tome como argumento una cadena
//y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeFirstLetter(str) {
  const words = str.split(" ");
  const capitalizedWords = [];

  for (let word of words) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
}

const sentence = "hello world, how are you? andres el mejor";
console.log(capitalizeFirstLetter(sentence)); // Output: "Hello World, How Are You?"
