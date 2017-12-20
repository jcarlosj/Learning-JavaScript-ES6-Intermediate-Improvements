/* Valores por defecto en argumentos en ES6*/
function sumar( arg1, arg2 = 4, arg3 = 3 ) {
  return arg1 + arg2 + arg3;
}

console .group( 'Resultados' );
  console .log( 'Suma: ', sumar( 2 ) );
  console .log( 'Es igual a 9?: ', sumar( 2 ) === 9 );
console .groupEnd();
