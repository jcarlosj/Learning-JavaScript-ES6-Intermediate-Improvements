/* Valores por defecto en argumentos en ES6 */
function pareja( ella = 'María', el ) {
  return [ ella, el ];
}

console .group( 'Parejas' );
  console .log( pareja() );                         // [ "María", undefined ]
  console .log( pareja( 'Luisa' ) );                // [ "Luisa", undefined ]
  console .log( pareja( 'Ana Maria', 'Pedro' ) );   // [ "Ana María", "Pedro" ]
console .groupEnd();
