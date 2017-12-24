/* Nuevos métodos en ES6 */

var listaNumeros = [ 1, 3 ,4, 2, 9 ];
/* Ejemplo 1: Find, FindIndex */

console .group( 'Encontrar "find" y "findIndex"' )
  console .log( 'El primer número mayor a 3: ', listaNumeros .find( numero => numero > 3 ) );       // Encontrar el primer número mayor a 3
  console .log( 'El índice del primer número mayor a 3: ', listaNumeros .findIndex( numero => numero > 3 ) );  // Entontrar el indice del primer número mayor a 3
console .groupEnd();

/* Ejemplo 2: Find, FindIndex */
var moviles = [
      'Samsung 8',
      'Samsung S3',
      'Iphone 6',
      'Samsung S3',
      'Iphone X',
    ];

  console .group( 'Encontrar "find" y "findIndex"' )
    console .log( 'El primer producto "Samsung S3": ', moviles .find( producto => producto === 'Samsung S3' ) );                   // Encontrar el primer número mayor a 3
    console .log( 'El índice del primer producto "Samsung S3": ', moviles .findIndex( producto => producto === 'Samsung S3' ) );   // Entontrar el indice del primer número mayor a 3
  console .groupEnd();
