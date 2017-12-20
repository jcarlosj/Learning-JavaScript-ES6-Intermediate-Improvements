/* Valores por defecto en argumentos en ES6*/
function agregar( valor, arreglo = [] ) {
  arreglo .push( valor );
  return arreglo;
}

frutas = [];

/* Pasa solo un valor como parámetro (Crea un array por valor) */
console .group( 'Valores sin pasar array' );
  console .log( agregar( 7 ) );     // [ 7 ]
  console .log( agregar( 1 ) );     // [ 1 ]
  console .log( agregar( 9 ) );     // [ 9 ]
console .groupEnd();

/* Pasa solo un valor y un array como parámetros (Agrega el valor al array que se le pasa como parámetro ) */
console .group( 'Array de frutas' );
  console .log( agregar( 'Manzana', frutas ) );   // [ "Manzana" ]
  console .log( agregar( 'Mango', frutas ) );     // [ "Manzana", "Mango" ]
  console .log( agregar( 'Mora', frutas ) );      // [ "Manzana", "Mango", "Mora" ]
console .groupEnd();
