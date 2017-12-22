/* Valores por defecto en argumentos en ES6 */

// Crea Objeto forma ES6
var objeto1 = { a: 1, b: 1, c: 1 };
var objeto2 = { b: 2, c: 2 };
var objeto3 = { c: 3 };

// Método assign() para copiar objetos
var objetoFinal = Object .assign( {}, objeto1, objeto2, objeto3 );   // objectoFinal se modifica los otros no
console .group( 'Objetos: Método assign()' );
  console .log( 'objetoFinal ', objetoFinal );     // { a: 1, b: 2, c: 3 }
  console .log( 'objeto1 ',  objeto1 );    // { a: 1, b: 1, c: 1 }
  console .log( 'objeto2 ',  objeto2 );    // { b: 2, c: 2 }
  console .log( 'objeto3 ',  objeto3 );    // { c: 3 }
console .groupEnd();
