/* Objetos de propagación o Spread (Expansión) en ES6 */

function multiplicarPor( multiplicador, ...numeros ) {
  // variables donde se almacenarán los resultados [ num1, num2, num3 ] .map
  return numeros .map(
    /* Función Anonima como parámetro */
    function( elemento ) {
      return multiplicador * elemento;
    }
  );   // map()
}

var salida = multiplicarPor( 2, 1, 2, 3 );

console .group( '2 multiplica a: 1, 2, 3' );
  console .log( salida );   // [ 2, 4 ,6 ]
console .groupEnd();

var numeros = [ 3, 4, 5 ],
    salida = multiplicarPor( 2, ...numeros );

console .group( '2 multiplica a: 3, 4, 5' );
  console .log( salida );   // [ 6, 8 ,10 ]
console .groupEnd();
