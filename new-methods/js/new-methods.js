/* Nuevos métodos en ES6 */

/* EPSILON
 * JavaScript no es un lenguaje pensado en el procesamiento numérico por lo que
 * puede dar algunos problemas haciendo calculos en los que se requieren Resultados
 * exactos */

console .group( 'EPSILON' );
  console .log( '0.3 es igual a 0.3 ( con === ) ', 0.1 + 0.2 === 0.3 );    // False
  console .log( '0.3 es igual a 0.3 ( abs() y EPSILON ) ', Math .abs( ( 0.1 + 0.2 ) - 0.3 ) < Number .EPSILON );   // True
                                                                        // Alternativa a la línea anterior
console .groupEnd();
