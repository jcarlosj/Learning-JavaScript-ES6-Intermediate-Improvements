/* Valores por defecto en argumentos en ES6 */

// Crea Objeto forma tradicional
var operaciones = {
  // Dentro del objeto de forma explicita
  sumar :function( num1, num2 ) {
    return num1 + num2;
  },
  restar :function( num1, num2 ) {
    return num1 + num2;
  },
}

// Fuera del objeto
operaciones .multiplicar = function ( num1, num2 ) {
  return num1 * num2;
};
operaciones .dividir = function ( num1, num2 ) {
  return num1 / num2;
};

// Resultados
var numero1 = 12,
    numero2 = 2;
console .log( 'numero 1: ' + numero1 );
console .log( 'numero 2: ' + numero2 );

console .group( 'Objetos: Definición tradicional de funciones' );
  console .log ( 'Suma: ', operaciones .sumar( numero1, numero2 ) );
  console .log ( 'Restar: ', operaciones .restar( numero1, numero2 ) );
  console .log ( 'Multiplicar: ', operaciones .multiplicar( numero1, numero2 ) );
  console .log ( 'Dividir: ', operaciones .dividir( numero1, numero2 ) );
console .groupEnd();
