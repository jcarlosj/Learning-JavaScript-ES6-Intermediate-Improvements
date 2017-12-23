/* Objetos de propagación o Spread (Expansión) en ES6 */

function contar( ...elementos ) {
  console .log( 'Cantidad de elementos del Array: ', elementos.length );
}

contar();     // 0
contar( 1, 3, 5, 7, );  // 4
contar( 'Juana', true, 10, undefined, null, '', [], {} ); // 8
