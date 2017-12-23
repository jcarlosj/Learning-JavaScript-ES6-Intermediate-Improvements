/* Expresiones regulares en ES6 */

/* De esta manera podemos verificar que nuestros navegadores soportan ES6 */
var cadena = 'Primera línea\nSegunda línea',
    regex = /(\S+) línea\n?/y;      // 'y' es la bandera para hacer búsquedas pegajosas o aditivas en JavaScript
                                    // Cualquier cosa que termine con ' línea\n'

console .group( 'Valores encontrados por la expresión regular' );

  var match1 = regex .exec( cadena );
  console .log( 'match1 ', match1 );            //  Primera
  console .log( '# ', regex .lastIndex );       //  En el caracter 14 termina la primera busqueda

  var match2 = regex .exec( cadena );
  console .log( 'match2 ', match2 );            //  Segunda
  console .log( '# ', regex .lastIndex );       //  En el caracter 27 termina la segunda búsqueda

  var match3 = regex .exec( cadena );
  console .log( 'match3 ', match3 );            //  null
  console .log( '# ', regex .lastIndex );       //  0 No hay mas aciertos

console .groupEnd( '' );
