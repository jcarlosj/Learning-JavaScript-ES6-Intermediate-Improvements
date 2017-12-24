/* Nuevos métodos en ES6 */

/* Trunc
 * Elimina los decimales (No redondea) */

console .group( 'Trunc' );
  console .log( 'Elimina los decimales de 42.7 ... ', Math .trunc( 42.7 ) );     // 42
  console .log( 'Elimina los decimales de 0.1 ... ', Math .trunc( 0.1 ) );       // 0
  console .log( 'Elimina los decimales de -0.2 ... ', Math .trunc( -0.1 ) );     // -0
console .groupEnd();
