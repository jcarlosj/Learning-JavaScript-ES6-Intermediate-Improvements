/* Valores por defecto en argumentos en ES6 */

// Crea Objeto forma ES6
var Persona = {
  nombre: 'Juan',
  [ 'id' + aleatorio() ]: 4      // Nombre de Variable de forma Aleatoria
};

function aleatorio() {
  return Math .floor( Math .random() * 10 );
}

// Resultados
console .log( Persona );
