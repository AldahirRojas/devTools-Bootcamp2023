function createPhoneNumber(numbers) {
    // Verificar si el array tiene 10 elementos
    if (numbers.length !== 10) {
      return "El array debe tener 10 números enteros";
    }
  
    // Obtener los componentes del número de teléfono
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
  
    // Formatear el número de teléfono con paréntesis y guiones
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  // Ejemplo de uso
  const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  console.log(phoneNumber); // Resultado esperado: "(123) 456-7890"

//   En esta solución, la función createPhoneNumber() acepta un array con 10 números enteros como parámetro. Primero, verifica si el array tiene exactamente 10 elementos. Luego, divide el array en los componentes del número de teléfono: el código de área, la primera parte y la segunda parte. Finalmente, utiliza plantillas de cadena para formatear el número de teléfono con paréntesis y guiones en la ubicación adecuada.