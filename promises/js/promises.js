/* Promises en ES6 */

/* CREACION DE PROMESAS */
let primeraPromesa = function() {
  return new Promise( function( resolve, reject ) {
    resolve( 'Primera promesa lista! ' );
  });
};
let segundaPromesa = function() {
  return new Promise( function( resolve, reject ) {
    resolve( 'Segunda promesa lista! ' );
  });
};
let terceraPromesa = function() {
  return new Promise( function( resolve, reject ) {
    resolve( 'Tercera promesa lista! ' );
  });
};
/* Encadenamos las Promesas */
Promise .all([ primeraPromesa(), segundaPromesa(), terceraPromesa() ])
  .then( respuestas => {
    respuestas .forEach( function( mensaje ) {
      console .log( mensaje );
    });
  })
  .catch( err => console .log( 'ERROR ', err ) );

/* NOTA: Si invertimos los tiempos los datos que se imprimirán serán los de la última
 *       que es la que prevalece al ejecutarse bien la primera y bien la segunda */
