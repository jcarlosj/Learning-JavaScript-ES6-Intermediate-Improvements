/* Objetos de propagación o Spread (Expansión) en ES6 */

const sumar = ( a, b ) => a + b;    // Arrow Function
let nums = [ 3, 5 ];                // Array

console .group( 'Llamadas a funciones: Sumar() )' );
  console .log( 'Tradicional ... ', sumar( nums[ 0 ], nums[ 1 ] ) );    // Forma tradicional
  console .log( 'Spread ... ', sumar( ...nums ) );                            // Spread
console .groupEnd();
