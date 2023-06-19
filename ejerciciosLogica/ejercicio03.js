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
  