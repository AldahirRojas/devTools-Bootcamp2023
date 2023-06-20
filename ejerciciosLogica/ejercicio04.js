function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
}
  
// Ejemplo de uso
fizzBuzz(15);


// En esta solución, la función fizzBuzz() recibe como parámetro un número entero n. Luego, se utiliza un bucle for para iterar desde 1 hasta n. Dentro del bucle, se verifican las condiciones utilizando el operador % (módulo) para determinar si el número es divisible por 3, 5 o ambos. Dependiendo de la condición, se imprime el resultado correspondiente utilizando la función console.log(). Si ninguna condición se cumple, se imprime el número tal cual. Al ejecutar fizzBuzz(15), se imprimirán los números del 1 al 15 siguiendo las reglas del juego FizzBuzz, produciendo el resultado esperado.