/* Objetos de propagación o Spread (Expansión) en ES6 */

function saludar( nombre, apellido, edad ) {
  alert( 'Hola ' + nombre + ' ' + apellido + ' que cumplas feliz tus ' + edad + ' años' );
}

var persona = [ 'Laura', 'Fonseca', 29 ];           // Array
saludar( ...persona );                              // Spread
