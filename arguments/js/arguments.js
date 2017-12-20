/* Valores por defecto en argumentos en ES6*/
function multiplicar( numero1, numero2 = 1 ) {
  return numero1 * numero2;
}

console .log( multiplicar( 5 ) );   // 5
