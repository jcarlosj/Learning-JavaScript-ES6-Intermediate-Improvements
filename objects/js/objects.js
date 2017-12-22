/* Valores por defecto en argumentos en ES6 */

// Crea Objeto forma tradicional
var mujer = {
  nombres: 'Luisa',
  apellidos: 'Escalante'
};
// Crea Objeto con sintáxis corta ES6
var nombres = 'Jorge',
    apellidos = 'Rodríguez';

var hombre = {
  nombres,
  apellidos
};

// Resultados
console .group( 'Objetos: Sintáxis Corta' );
  console .log ( 'Tradicional: ', mujer .nombres + ' ' + mujer .apellidos );
  console .log ( 'Sintáxis Corta ES6: ', hombre .nombres + ' ' + hombre .apellidos );
console .groupEnd();
