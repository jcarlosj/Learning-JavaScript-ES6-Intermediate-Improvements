/* Nuevos métodos en ES6 */

/* Sign
 * Valida el signo (positivo, negativo) */

console .group( 'Sign' );
  console .log( 'El signo de 7 es ... ', Math .sign( 7 ) );       // 1
  console .log( 'El signo de 0 es ... ', Math .sign( 0 ) );       // 0
  console .log( 'El signo de -0 es ... ', Math .sign( -0 ) );     // -0
  console .log( 'El signo de -7 es ... ', Math .sign( -7 ) );     // -1
  console .log( 'El signo de NaN es ... ', Math .sign( NaN ) );   // NaN
console .groupEnd();
