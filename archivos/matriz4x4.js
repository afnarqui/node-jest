/**
 *
se tiene una X en la esquina superior izquierda de un área de 4x4. se tiene un amatriz con 10
elementos. cada 2 elementos de la matriz corresponden a un movimiento, el primero en el eje
horizontal y el segundo en el eje vertical. el numero indica las unidades a moverse y el signo
la direccion(positivo para derecha o abajo, negativo para izquierda o arriba)
por ejemplo, para la matriz myArray:=(1,2,-1,1,0,1,2,-1,-1,-2)
la X se moverá una unidad a la derecha y dos hacia abajo, luego una unidad a la izquierda y una abajo
y asi sucesivamente. el programa a escribir debe imprimir la posicion final de la X.
para representar los lugares donde la X no se encuentra utilizar la letra O. si la instrucción
obliga a la X a salir del área de 4x4 la X permanece´ra en el borde, sin salir.
 */

/**
 Primero, definiremos las variables necesarias. Tendremos una matriz de movimientos llamada myArray,
que contendrá los elementos proporcionados en la descripción. También necesitaremos variables
para almacenar las coordenadas x e y actuales de la X, que inicialmente estarán en la posición (0, 0)
de la matriz.
 */
const myArray = [1, 2, -1, 1, 0, 1, 2, -1, -1, -2];
let x = 0;
let y = 0;
/**
 *
 A continuación, vamos a definir una función llamada moveX que se encargará de mover la X
 según las instrucciones en la matriz myArray. Dentro de esta función, iteraremos a través de los elementos de myArray,
  tomando de a dos elementos a la vez.
 */

function moveX() {
  for (let i = 0; i < myArray.length; i += 2) {
    const moveX = myArray[i];
    const moveY = myArray[i + 1];
    console.log('moveX', moveX)
    console.log('moveY', moveY)
    // Actualizar las coordenadas de la X
    x = Math.max(0, Math.min(3, x + moveX));
    y = Math.max(0, Math.min(3, y + moveY));
    console.log('x', x)
    console.log('y', y)
  }
}

/**

Después, vamos a definir una función llamada printPosition que imprimirá la posición final de la X.
 Esta función creará una matriz de 4x4 y rellenará los lugares donde la X no se encuentre con la letra "O".
 Luego, colocará la letra "X" en la posición final determinada por las coordenadas x e y.
 */
function printPosition() {
  const matrix = Array.from(Array(4), () => Array(4).fill("O"));
  console.log('matrix',matrix)
  matrix[y][x] = "X";
  console.log('matrix[y][x]',matrix[y][x])

  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

/**
 Finalmente, llamaremos a las funciones moveX y printPosition para obtener la posición final de la X
e imprimir el resultado.
 */
moveX();
printPosition();
