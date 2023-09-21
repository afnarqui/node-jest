/**
 escribir un programa en javascript que recorra un arreglo y genere un histograma en base
a los números de este. El arreglo se llama myArray y contiene 10 elementos que corresponden
a números enteros del 1 al 5.
un histograma representa que tanto un elemento aparece en un conjunto de datos (debe mostrar al
frecuencia para todos los números del 1 al 5, incluso si no están presentes en el arreglo)
 */

function generarHistograma(arr) {
  var histograma = {};

  // Inicializar el histograma con todas las frecuencias en 0
  for (var i = 1; i <= 5; i++) {
    histograma[i] = 0;
  }
  // Recorrer el arreglo y actualizar las frecuencias
  for (var j = 0; j < arr.length; j++) {
    var elemento = arr[j];
    histograma[elemento]++;
  }

  // Imprimir el histograma
  for (var k = 1; k <= 5; k++) {
    console.log(k + ': ' + histograma[k]);
  }
}

// Ejemplo de uso con el arreglo myArray
// var myArray = [1, 2, 3, 3, 3, 4, 4, 5, 5, 5];
var myArray = [1,2,1,3,3,1,2,1,5,1];
generarHistograma(myArray);


function generarHistogramados(arr) {
  var histograma = Array(5).fill(0);

  // Recorrer el arreglo y actualizar las frecuencias
  for (var j = 0; j < arr.length; j++) {
    var elemento = arr[j];
    histograma[elemento - 1]++;
  }

  // Imprimir el histograma
  for (var k = 0; k < histograma.length; k++) {
    console.log((k + 1) + ': ' + '*'.repeat(histograma[k]));
  }
}

// Ejemplo de uso con el arreglo myArray
var myArraydos = [1,2,1,3,3,1,2,1,5,1];
generarHistogramados(myArraydos);

/**
 *
 En este código, creamos una función llamada generarHistograma que toma como parámetro un arreglo arr.
  Inicializamos un objeto histograma con todas las frecuencias en 0.

Luego, recorremos el arreglo y actualizamos las frecuencias en el histograma. Finalmente,
 imprimimos el histograma mostrando la frecuencia de cada número del 1 al 5.

En el ejemplo de uso, el arreglo myArray contiene los números [1, 2, 3, 3, 3, 4, 4, 5, 5, 5].
Al llamar a la función generarHistograma con este arreglo, obtendrás el histograma correspondiente.
 */
