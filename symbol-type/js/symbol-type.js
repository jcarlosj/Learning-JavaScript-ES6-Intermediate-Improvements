/* Valores por defecto en argumentos en ES6 */
function symbolType() {

  /* Declara constantes de tipo "Symbol" */
  const primera = Symbol();
  const segunda = Symbol();
  /* Declara variable de tipo Objeto Vacio */
  let variableObjeto = {};      // Equivale a:   variableObjeto = new Object();

  /* Asigna las constantes "Symbol" al Objeto usando la notación de [] no la de  . */
  variableObjeto[ primera ] = 'PRIMERA';
  variableObjeto[ segunda ] = 'SEGUNDA';

  /* Valores contenidos en los objetos */
  console .group( 'Valores contenidos en los objetos (primera, segunda)' );
    console .log(
      ' >>> variableObjeto[ primera ] ... ',
      variableObjeto[ primera ]
    );
    console .log(
      ' >>> variableObjeto[ segunda ] ... ',
      variableObjeto[ segunda ]
    );
  console .groupEnd();

  /* Validaciones */
  console .group( 'JSON .stringify' );
    console .log(
      ' >>> JSON .stringify( variableObjeto ) ... ',
      JSON .stringify( variableObjeto )
    );
    console .log(
      'JSON .stringify( variableObjeto[ primera ] ) ... ',
      JSON .stringify( variableObjeto[ primera ] )
    );
    console .log(
      'JSON .stringify( variableObjeto[ segunda ] ) ... ',
      JSON .stringify( variableObjeto[ segunda ] )
    );
  console .groupEnd();

  console .group( 'Object .keys' );
    console .log(
      ' >>> Object .keys( variableObjeto ) ... ',
      Object .keys( variableObjeto )
    );
  console .groupEnd();

  console .group( 'Object .getOwnPropertyNames' );
    console .log(
      '  >>> Object .getOwnPropertyNames( variableObjeto ) ... ',
      Object .getOwnPropertyNames( variableObjeto )
    );
    console .log(
      'Object .getOwnPropertyNames( variableObjeto[ primera ] ) ... ',
      Object .getOwnPropertyNames( variableObjeto[ primera ] )
    );
    console .log(
      'Object .getOwnPropertyNames( variableObjeto[ segunda ] ) ... ',
      Object .getOwnPropertyNames( variableObjeto[ segunda ] )
    );
  console .groupEnd();

  /* OBTENER las VARIABLES o CONSTANTES de tipo SYMBOL contenidos en un OBJETO*/
  console .group( 'Object .getOwnPropertySymbols' );
    console .log(
      ' >>> Object .getOwnPropertySymbols( variableObjeto ) ... ',
      Object .getOwnPropertySymbols( variableObjeto )
    );
    console .log(
      'Object .getOwnPropertySymbols( variableObjeto[ primera ] ) ... ',
      Object .getOwnPropertySymbols( variableObjeto[ primera ] )
    );
    console .log(
      'Object .getOwnPropertySymbols( variableObjeto[ segunda ] ) ... ',
      Object .getOwnPropertySymbols( variableObjeto[ segunda ] )
    );
  console .groupEnd();
}



symbolType();
