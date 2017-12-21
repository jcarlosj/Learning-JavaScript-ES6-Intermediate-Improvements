/* Valores por defecto en argumentos en ES6 */
function symbolType() {
  var variableSimbolo = Symbol( 'foo' );              // Declara una variable de tipo Symbol
  var variableObjeto  = Object( variableSimbolo );    // Metenmos la variable de tipo "Symbol" a un Objeto

  /* Verificamos el tipo de variable de cada variable */
  console .group( 'typeof' );
    console .log( 'variableSimbolo: ', typeof variableSimbolo );   // "Symbol"
    console .log( 'variableObjeto: ', typeof variableObjeto );     // "Object"
  console .groupEnd();
}

symbolType();
