/* Valores por defecto en argumentos en ES6 */

/* Usando el Destructuring (asignando valores con respecto a un arreglo) */
function sumar(
  [ num1, num2 ] = [ 1, 2 ],      // Destructuring
  { num3: num3 } = { num3: 3 }    // JSON Object
) {

  return num1 + num2 + num3 ;
}

/* Resultados */
console .group( 'Destructuring' );
  console .log( sumar() );                          // 6
  console .log( sumar( [ 3, 5 ] ) );                // 11
  console .log( sumar( [ 3, 5 ], { num3:2 } ) );    // 10
console .groupEnd();
