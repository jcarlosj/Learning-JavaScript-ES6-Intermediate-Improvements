/* Objetos de propagación o Spread (Expansión) en ES6 */

let letras = [ 'c', 'd', 'e' ];

/* Agregando valores de forma tradicional */
let cadena1 = [ 'a', 'b', 'f', 'g' ];   // Forma tradicional

cadena1 .push( letras[ 0 ] );
cadena1 .push( letras[ 1 ] );
cadena1 .push( letras[ 2 ] );

/* Agregando usando el Spread */
let cadena2 = [ 'a', 'b', ...letras, 'f', 'g' ];

console .group( 'Spread con Arrays' );
console .log( "letras ... ", letras );
  console .group( 'Tradicional' );
    console .log( "cadena1 ... ", cadena1 );  // Tradicional
  console .groupEnd();
  console .group( 'Spread' );
    console .log( "cadena2 ... ", cadena2 );  // Spread
  console .groupEnd();
console .groupEnd();
