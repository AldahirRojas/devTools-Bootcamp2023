function countNameRepetitions(names) {
    // Crear un objeto para almacenar los nombres y su conteo
    const nameCount = {};
  
    // Recorrer el array de nombres
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
  
      // Verificar si el nombre ya está en el objeto de conteo
      if (nameCount[name]) {
        // Si ya existe, incrementar el conteo
        nameCount[name] += 1;
      } else {
        // Si no existe, inicializar el conteo en 1
        nameCount[name] = 1;
      }
    }
  
    // Crear un nuevo objeto para almacenar los nombres y su representación de asteriscos
    const result = {};
  
    // Recorrer el objeto de conteo y generar la representación de asteriscos
    for (let name in nameCount) {
      const count = nameCount[name];
      const asterisks = '*'.repeat(count);
      result[name] = asterisks;
    }
  
    // Retornar el objeto con los nombres y su representación de asteriscos
    return result;
  }
  
  // Ejemplo de uso
  const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
  const resultado = countNameRepetitions(nombres);
  console.log(resultado);
  // Resultado esperado:
  // {
  //   Juan: '**',
  //   María: '***',
  //   Pedro: '*'
  // }
  

  // En esta solución, la función countNameRepetitions() recibe como parámetro un array de nombres. Se crea un objeto nameCount para almacenar los nombres y su conteo correspondiente. Luego, se recorre el array de nombres y se actualiza el conteo en el objeto nameCount. Después, se crea un nuevo objeto result donde se almacenará la representación de asteriscos para cada nombre. Finalmente, se recorre el objeto nameCount, se genera la cadena de asteriscos con la función repeat() y se asigna al objeto result. El resultado final es el objeto result con los nombres y su representación de asteriscos correspondiente.