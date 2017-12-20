/* Valores por defecto en argumentos en ES5 o JavaScript Tradicional */
function multiplicar( numero1, numero2 ) {
  numero2 = typeof numero2 !== 'undefined' ? numero2 : 1;   // Operador ternario
  return numero1 * numero2;
}

console .log( multiplicar( 5 ) );   // 5
