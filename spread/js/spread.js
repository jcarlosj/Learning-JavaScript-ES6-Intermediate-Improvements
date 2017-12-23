/* Objetos de propagación o Spread (Expansión) en ES6 */

var numeros1 = [ 0, 1, 2 ],
    numeros2 = [ 3, 4, 5 ];

console .log( 'Array numeros1: ', numeros1 );
console .log( 'Array numeros2: ', numeros2 );

numeros1 .push( ...numeros2 );    // Agregamos valores como un Spread al Array 'numeros1'

/* Resultado del Array 'numeros1' */
console .group( 'Despues del Spread de numeros2 sobre numeros1' );
console .log( 'Array numeros1: ', numeros1 );
console .groupEnd();
