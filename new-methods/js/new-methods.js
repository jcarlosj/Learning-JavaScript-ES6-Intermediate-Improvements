/* Nuevos métodos en ES6 */

/* IsNaN */

console .group( 'isNaN' );
  console .log( '42 es un NaN: ', Number .isNaN( 42 ) );
  console .log( 'NaN es un NaN: ', Number .isNaN( NaN ) );
console .groupEnd();

/* IsFinite */
console .group( 'isFinite' );
  console .log( 'Infinity es un valor Finito (positivo): ' , Number .isFinite( Infinity ) );
  console .log( '-Inifinity es un valor Finito (negativo) ' , Number .isFinite( -Infinity ) );
  console .log( 'NaN es un valor Finito ' , Number .isFinite( NaN ) );
  console .log( '123 es un valor Finito ' , Number .isFinite( 123 ) );
console .groupEnd();
