/* Valores por defecto en argumentos en ES6 */
function letTest() {
  if( true ) {
    let numero = 23;
    console .log( 'Dentro del Bloque IF ', numero ); // 23
  }
  console .log( 'Fuera del Bloque IF ', numero ); // ReferenceError: x is not defined
}

letTest();
