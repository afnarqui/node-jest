/*
imprimir un tablero de damas donde la "X" representa el color negro y el "_" representa
el color blanco. el tablero debe tener n x n casillas
tu tablero siempre debe partir con un cuadro negro (una "X") en la esquina superior izquierda
y el valor de n puede ir de 1 a 10. en caso de que el valor de n sea diferente, asumir
que n es igual a 5
*/

function imprimirTablero(n) {
  var tablero = '';

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // Si la suma de las coordenadas i y j es par, imprimir "X" (color negro)
      // De lo contrario, imprimir "_" (color blanco)
      if ((i + j) % 2 === 0) {
        tablero += 'X ';
      } else {
        tablero += '_ ';
      }
    }
    tablero += '\n'; // Agregar salto de línea al final de cada fila
  }

  console.log(tablero);
}

// Ejemplo de uso:
var n = 5; // Tamaño del tablero
imprimirTablero(n);

/*
Este código creará un tablero de damas de 5x5,
como se mencionó en el enunciado. Si deseas un tablero de un tamaño diferente,
 solo tienes que cambiar el valor de la variable n en el ejemplo de uso.

X _ X _ X
_ X _ X _
X _ X _ X
_ X _ X _
X _ X _ X
*/


