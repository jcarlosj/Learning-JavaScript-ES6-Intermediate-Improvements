/* Valores por defecto en argumentos en ES6 */
function symbolType() {

  // Declara constantes de tipo "Symbol"
  const primera = Symbol();
  const segunda = Symbol();

  console .group( 'Validaciones de variables tipo "Symbol"' );
    console .log(
      'Symbol( "foo" ) !== Symbol( "foo" ) ... ',
      Symbol( "foo" ) !== Symbol( "foo" )
    );
    console .log(
      'primera !== segunda ... ',
      primera !== segunda
    );       // Equivalente a la validación anterior

    /* Valida los tipos */
    console .group( 'Constantes de tipo "Symbol"' );
      console .log(
        'typeof primera !== "symbol" ... ',
        typeof primera !== "symbol"
      );
      console .log(
        'typeof segunda !== "symbol" ... ',
        typeof segunda !== 'symbol'
      );
    console .groupEnd();
  console .groupEnd();
}

symbolType();
