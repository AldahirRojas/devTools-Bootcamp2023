function next_pal(number) {
    // Función para verificar si un número es palíndromo
    function isPalindrome(num) {
      const str = num.toString();
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    }
  
    // Verificar el número siguiente al dado hasta encontrar un palíndromo
    let nextNumber = number + 1;
    while (!isPalindrome(nextNumber)) {
      nextNumber++;
    }
  
    return nextNumber;
  }
  
  // Ejemplo de uso
  const inputNumber = 132;
  const result = next_pal(inputNumber);
  console.log(result); // Resultado esperado: 131
  