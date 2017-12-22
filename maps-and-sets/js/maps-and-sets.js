/* Valores por defecto en argumentos en ES6 */

// Declara un Map (Mapas)
var trabajador = new Map();

// Agrega 2 pares, clave: valor
trabajador .set( 'nombre', 'Ana María' )
           .set( 'cargo', 'Gerente' )
           .set( 'subordinados', 13 );

console .group( 'Mapas (Maps)' );
  // Cantidad de Elementos
  console .log( 'Nombre: ', trabajador .get( 'nombre' ) );

  // Verifica si existe un elemento en el conjunto
  console .log( 'Cargo: ',  trabajador .get( 'cargo' ) );
  console .log( '# Empleados a cargo: ',  trabajador .get( 'subordinados' ) );
console .groupEnd();
