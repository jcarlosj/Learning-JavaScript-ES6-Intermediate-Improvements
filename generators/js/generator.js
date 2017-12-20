/* Generadores en ES6 */
function* cuadrados() {
  var numero = 1,
      cuadrado = 0;
  while( true ) {
    cuadrado = numero * numero;   // Obtiene el cuadrado
    yield cuadrado;               // Retorna el valor y mantiene el mismo
    numero++;                     // Aumenta para la próxima iteracción
  }
}

/* Generamos los cuadrados */
var numero_generado = cuadrados();

console .log( numero_generado );  // Estado de suspención

/* Obtengo los cuadrados usando next() */
console .log( numero_generado .next() .value );   //  1
console .log( numero_generado .next() .value );   //  4
console .log( numero_generado .next() .value );   //  9
console .log( numero_generado .next() .value );   //  16
