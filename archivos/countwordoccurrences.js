// Escriba una función en Javascript que cuente la cantidad de veces que se repite cada palabra en un string
// de entrada. Es decir, la función tendrá como parámetros de entrada el string y la salida será un objeto
//  que contenga cada palabra y el número de veces que aparece en el string de entrada.
//  No usar FOR ni WHILE

// function countWordOccurrences(str) {
//   const words = str.split(' ');

//   if (words.length === 0) {
//     throw new Error("El string está vacío.");
//   }

//   const wordCount = words.reduce((count, word) => {
//     count[word] = (count[word] || 0) + 1;
//     return count;
//   }, {});

//   return wordCount;
// }

function repeatWords(palabra) {

	const palabras = palabra.split(' ');

	return palabras.reduce((c,e) => {
		if( c[e] ) {
			c[e]++;
		} else {
			c[e] = 1;
		}
		return c;
	}, {});
}


// const respuesta = countWordOccurrences('andres felipe naranjo quintero carlos andres mario quintero pedro quintero')

const respuesta = repeatWords('andres felipe naranjo quintero carlos andres mario quintero pedro quintero')

console.log(respuesta)
