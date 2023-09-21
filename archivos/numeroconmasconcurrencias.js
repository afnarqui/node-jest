
/**
 *
 se tiene un arreglo llamada myArray con 10 elementos enteros en el rango de 1 a 9. escribie un programa que imprima
 el numero  que tiene mas ocurrencias seguidas en el arreglo y también imprima la cantidad de veces
 que aparece en al secuencia
 */
function encontrarNumeroConMasOcurrencias(myArray) {
  var numeroActual = myArray[0]; // Inicializamos el número actual con el primer elemento del arreglo
  var contador = 1; // Contador para llevar el seguimiento de las ocurrencias consecutivas
  var maxOcurrencias = 1; // Variable para almacenar el máximo de ocurrencias consecutivas
  var numeroConMasOcurrencias = numeroActual; // Variable para almacenar el número con más ocurrencias consecutivas

  for (var i = 1; i < myArray.length; i++) {
    if (myArray[i] === numeroActual) {
      contador++;
      if (contador > maxOcurrencias) {
        maxOcurrencias = contador;
        numeroConMasOcurrencias = numeroActual;
      }
    } else {
      numeroActual = myArray[i];
      contador = 1;
    }
  }

  console.log("El número con más ocurrencias consecutivas es:", numeroConMasOcurrencias);
  console.log("Aparece", maxOcurrencias, "veces consecutivas.");
}

// Ejemplo de uso con el arreglo myArray
var myArray = [4,1,4, 2, 4,4,2 ,2, 3, 3, 3, 3, 4, 4,4,4,4,4];
encontrarNumeroConMasOcurrencias(myArray);
