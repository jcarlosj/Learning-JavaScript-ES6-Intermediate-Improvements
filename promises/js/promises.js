/* Promises en ES6 */

/* CREACION DE PROMESAS */
/* Promise con funciones anonimas tradicionales */
let miPromesa1 = new Promise( function( resolve, reject ) {
  setTimeout( function() {
    resolve( 'Todo bien!' );
  }, 1000 );
  setTimeout( function() {
    reject( 'Todo mal :(' );
  }, 500 );                       // Se ejecuta primero por que esta a segundo y medio de ejecución respecto a la anterior
});
/* Promise con Arrow Functions (Fat Arrows) */
let miPromesa2 = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( 'Todo bien!' );
  }, 1000 );                      // Se ejecuta primero por que esta a segundo de ejecución respecto a la siguiente
  setTimeout( () => {
    reject( 'Todo mal :(' );
  }, 1500 );
});

/* DISPARADOR O EJECUCIÓN DE PROMESAS */
/* Promesa con funciones tradicionales */
console .group( 'Promises' );

miPromesa1 .then( function ( res ) {
  console .log( 'Promesa 1: ', res );
}, function( err ) {
  console .log( 'Promesa 1: ERROR ', err );
});
/* Promesa con Arrow Functions (Fat Arrow) */
miPromesa2 .then( ( res ) => {
  console .log( 'Promesa 2: ', res );
}, ( err ) => {
  console .log( 'Promesa 2: ERROR ', err );
});

console .groupEnd();
