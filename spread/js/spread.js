/* Objetos de propagación o Spread (Expansión) en ES6 */

function ordenar( ...numeros ) {
  return numeros .sort();
}

var numeros = [ 5, 3, 7, 1, 9 ];

console .group( 'Ordenar: 5, 3, 7, 1, 9' );
  console .log( 'Forma 1: ', ordenar( 5, 3, 7, 1, 9 ) );   // [ 2, 4 ,6 ]
  console .log( 'Forma 2: ', ordenar( ...numeros ) );   // [ 2, 4 ,6 ]
console .groupEnd();
