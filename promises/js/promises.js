/* Promises en ES6 */

/* CREACION DE PROMESAS */
let primeraPromesa = function() {
    return new Promise( function( resolve, reject ) {
      resolve( 'Primera Promesa!' );
    });
};

let segundaPromesa = ( mensaje ) => {                       // Function Arrow
    return new Promise( ( resolve, reject ) => {            // Function Arrow
      resolve( mensaje + ' Segunda Promesa!' );
    });
};

let terceraPromesa = function( mensaje ) {
    return new Promise( function( resolve, reject ) {
      resolve( mensaje +' Tercera Promesa!' );
    });
};

/* Encadenamos las Promesas */
primeraPromesa() .then( function( resultado ) {   // Lanza la primera promesa si es correcta lanza la siguiente a través de una función anonima en el "then"
  return segundaPromesa( resultado );             // Lanza la segunda promesa si es correcta lanza la siguiente a través de una función anonima en el "then"
}) .then( function( resultado ) {
  return terceraPromesa( resultado );             // Lanza la tercera promesa si es correcta lanza la siguiente 
}) .then( function( resultado ) {
  console .log( 'Finaliza: ' + resultado );
});
