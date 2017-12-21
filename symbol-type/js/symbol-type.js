/* Valores por defecto en argumentos en ES6 */
function symbolType() {

  /* Declara constantes de tipo "Symbol" */
  const primera = Symbol( 'Yo soy el primero' );
  const segunda = Symbol( 'Yo soy el segundo' );
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
  console .groupEnd();

  /* OBTENER las VARIABLES o CONSTANTES de tipo SYMBOL contenidos en un OBJETO*/
  console .group( 'Object .getOwnPropertySymbols' );
    console .log(
      ' >>> Object .getOwnPropertySymbols( variableObjeto ) ... ',
      Object .getOwnPropertySymbols( variableObjeto )
    );
  console .groupEnd();
}



symbolType();
