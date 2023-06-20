function drawX(tamano) {
    for (let i = 0; i < tamano; i++) {
      let linea = '';
      for (let j = 0; j < tamano; j++) {
        if (i === j || j === tamano - 1 - i) {
          linea += '*';
        } else {
          linea += ' ';
        }
      }
      console.log(linea);
    }
  }
  
  // Ejemplo de uso
  drawX(8);
  
//   La función drawX(tamano) recibe un parámetro tamano que representa el tamaño de la X que se desea dibujar.

// Luego, se utiliza un bucle for para iterar desde 0 hasta tamano - 1, lo que corresponde a las filas del dibujo. Esto se hace con la variable i, que representa el índice de la fila actual.

// Dentro de este bucle, se declara una variable llamada linea que almacenará el contenido de cada fila del dibujo.

// Luego, se utiliza otro bucle for para iterar desde 0 hasta tamano - 1, representando las columnas del dibujo. Esto se hace con la variable j, que representa el índice de la columna actual.

// Dentro de este segundo bucle, se evalúa la condición i === j y j === tamano - 1 - i para determinar si la posición actual corresponde a un asterisco de la X. Si alguna de las condiciones es verdadera, significa que estamos en una posición donde debe ir un asterisco.

// En ese caso, se concatena un asterisco (*) a la variable linea. De lo contrario, se concatena un espacio en blanco (' ').

// Una vez completado el segundo bucle, se tiene la línea completa con asteriscos y espacios en blanco según corresponda. Se imprime esta línea utilizando console.log(linea).

// Este proceso se repite para cada fila, y al finalizar se habrán impreso todas las filas del dibujo de la X.