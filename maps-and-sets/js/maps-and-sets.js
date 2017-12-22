/* Valores por defecto en argumentos en ES6 */

// Declara un Set (Conjunto)
var frutas = new Set();
// Agrega 3 elementos al conjunto
frutas .add( 'Manzana' )
       .add( 'Mango' )
       .add( 'Manzana' );     // Elemento repetido, si está en minúsculas no estaría repetido

console .group( 'Conjuntos (Sets)' );
  // Cantidad de Elementos
  console .log( 'Cantidad de elementos: ', frutas .size );

  // Verifica si existe un elemento en el conjunto
  console .log( 'Existe el elemento "Mora"? ', frutas .has( 'Mora' ) );
  console .log( 'Existe el elemento "Mango"? ', frutas .has( 'Mango' ) );
console .groupEnd();
