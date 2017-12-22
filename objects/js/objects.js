/* Valores por defecto en argumentos en ES6 */

// Crea Objeto forma ES6
var operaciones = {
  sumar( num1, num2 ) {
    return num1 + num2;
  },
  restar( num1, num2 ) {
    return num1 - num2;
  },
  multiplicar( num1, num2 ) {
    return num1 * num2;
  },
  dividir( num1, num2 ) {
    return num1 / num2;
  }
};

// Resultados
var numero1 = 12,
    numero2 = 2;
console .log( 'numero 1: ' + numero1 );
console .log( 'numero 2: ' + numero2 );

console .group( 'Objetos: Definición corta de funciones con ES6' );
  console .log ( 'Suma: ', operaciones .sumar( numero1, numero2 ) );
  console .log ( 'Restar: ', operaciones .restar( numero1, numero2 ) );
  console .log ( 'Multiplicar: ', operaciones .multiplicar( numero1, numero2 ) );
  console .log ( 'Dividir: ', operaciones .dividir( numero1, numero2 ) );
console .groupEnd();
