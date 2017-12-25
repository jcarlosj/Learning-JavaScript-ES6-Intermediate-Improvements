/* Promises en ES6 */

/* CREACION DE PROMESAS */
let primeraPromesa = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( 'Primera Promesa - Todo Bien' );
  }, 1000 );                                      // 1 segundo
});

let segundaPromesa = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( 'Segunda Promesa - Todo Bien' );
  }, 500 );                                      // 0.5 segundos
});

/* Encadenamos las Promesas */
Promise .all([ primeraPromesa, segundaPromesa ])
  .then( data => {
    console .log( data );
  })
  .catch( err => console .log( 'ERROR ', err ) );

/* NOTA: Si invertimos los tiempos los datos que se imprimirán serán los de la última
 *       que es la que prevalece al ejecutarse bien la primera y bien la segunda */  
