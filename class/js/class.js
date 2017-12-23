/* Clases y la POO en ES6 */

/* Definición de la clase Rectangulo */
class Rectangulo {
  constructor( base, altura ) {
    this .base = base;
    this .altura = altura;
  }
  /* Definición del método calcArea */
  calcArea () {
    return (this .base * this .altura);
  }
}

/* Se crean las instancias necesarias de la clase definida */
var rectangulo1 = new Rectangulo( 5, 10 ),
    rectangulo2 = new Rectangulo( 3, 7 );

/* Se da uso a los métodos de la misma (Resultados) */
console .group( 'Clases: ' );
  console .log( 'Área rectangulo1 ... ', rectangulo1 .calcArea() );
  console .log( 'Área rectangulo2 ...', rectangulo2 .calcArea() );
console .groupEnd();
