/* Valores por defecto en argumentos en ES6 */
function varTest() {
  if( true ) {
    var numero = 23;
    console .log( 'Dentro del Bloque IF ', numero ); // 23
  }
  console .log( 'Fuera del Bloque IF ', numero ); // 23
}

varTest();
