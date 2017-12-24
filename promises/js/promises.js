/* Promises en ES6 */

/* CREACION DE PROMESAS */
let miPromesa = new Promise( function( todoBien, todoMal ) {
  let resultado = false;

  if( resultado ) {
    todoBien( 'Listo Medellín! ');
  }
  else {
    todoMal( 'Algo falló parce' );
  }
});

/* DISPARADOR O EJECUCIÓN DE PROMESAS */
console .group( 'Promises' );

miPromesa .then( function ( resultado ) {
  console .log( 'El resultado es: ', resultado );
})
.catch( function( resultado ) {
    console .log( 'El resultado es: ', resultado );
});

console .groupEnd();
