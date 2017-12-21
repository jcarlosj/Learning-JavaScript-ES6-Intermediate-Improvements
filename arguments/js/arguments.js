/* Valores por defecto en argumentos en ES6 */
function contar( numero1, numero2, ...arreglo ) {   /* ...arreglo -> Argumento Extendido */
  return ( numero1 + numero2 ) * arreglo .length;
}

/* Resultado */
console .log( contar( 3, 2, 'Azul', true, 7 ) );  // 15
