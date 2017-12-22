/* Valores por defecto en argumentos en ES6 */

// Crea un array de datos
let datos = [ 'Renault Clio', 'Manzana', 'Nevera', 40 ];

// Extraemos los datos del Array 'datos' usando el destructuring asignandolo a una lista de variables
let [ carro, fruta, electrodomestico, meses ] = datos;

// Imprimimos los datos extraidos
console .group( 'Destructuring' );
  console .log( 'carro: ', carro );
  console .log( 'fruta: ', fruta );
  console .log( 'electrodomestico: ', electrodomestico );
  console .log( 'mes: ', meses );
console .groupEnd();
