/* Valores por defecto en argumentos en ES6 */

/* Declara constantes de tipo "Symbol" */
const COLOR_RED    = Symbol( 'Rojo' ),
    COLOR_ORANGE = Symbol( 'Naranja' ),
    COLOR_YELLOW = Symbol( 'Amarillo' ),
    COLOR_GREEN  = Symbol( 'Verde' ),
    COLOR_BLUE   = Symbol( 'Azul' ),
    COLOR_VIOLET = Symbol( 'Violeta' );

/* Obtiene los colores complementarios */
function complemento( color ) {
  switch( color ) {
    case COLOR_RED    : return COLOR_GREEN;
    case COLOR_ORANGE : return COLOR_BLUE;
    case COLOR_YELLOW : return COLOR_VIOLET;
    case COLOR_BLUE   : return COLOR_ORANGE;
    case COLOR_VIOLET : return COLOR_YELLOW;
    default:
      throw new Exception( 'Color desconocido ' + color );
  }
}

/* Resultados */
console .group( 'Colores complementarios' );
  console .log( 'Rojo: ', complemento( COLOR_RED ) );
  console .log( 'Azul: ', complemento( COLOR_BLUE ) );
  console .log( 'Violeta: ', complemento( COLOR_VIOLET ) );
console .groupEnd();
