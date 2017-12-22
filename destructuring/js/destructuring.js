/* Valores por defecto en argumentos en ES6 */

// Crea un objeto de datos
let modulo = {
  calcularCuadrado( longitud ) {
    console .log( 'Cuadrado de longitud ' + longitud + ' es: ', longitud * longitud );
  },
  perimetroCirculo( radio ) {
    console .log( 'Perímetro de un circulo de radio ' + radio + ' es: ', 2 * Math .PI * radio );
  },
  saludar( nombre ) {
    console .log( 'Hola ' + nombre + ' esto es Destructuring' );
  }
};

// Extraemos los datos del Objeto 'datos' usando el destructuring asignandolo a una lista de variables
let { calcularCuadrado, saludar, perimetroCirculo } = modulo;     // Aunque esten invertidos si se llaman igual los resultados se extraen

// Imprimimos los datos extraidos
calcularCuadrado( 5 );
perimetroCirculo( 2 );
saludar( 'Juan' );
