/* Nuevos métodos en ES6 */

/* isSafeInteger */

console .group( 'isSafeInteger' );
  console .log( '42 es un número seguro: ', Number .isSafeInteger( 42 ) );
  console .log( '9007199254740992 es número seguro: ', Number .isSafeInteger( 9007199254740992 ) );   // Solo soporta hasta 9007199254740991
console .groupEnd();
