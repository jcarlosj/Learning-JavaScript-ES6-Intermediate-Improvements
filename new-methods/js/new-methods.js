/* Nuevos métodos en ES6 */

/* StartWith, EndsWith, Includes */
var cadena = 'Hola carola cara de bola';

/* Resultados aplicando estos métodos */
console .log( cadena .startsWith( 'ola', 1 ) );     // Encuentra la palabra 'ola' apartir del caracter 1
console .log( cadena .endsWith( 'ola' ) );          // Finaliza con 'ola'
console .log( cadena .includes( 'ola' ) );          // Incluye 'ola'
console .log( cadena .includes( 'ola', 1 ) );       // Incluye 'ola' en la posición 1
console .log( cadena .includes( 'ola', 2 ) );       // Incluye 'ola' en la posición 2
