/* Objetos de propagación o Spread (Expansión) en ES6 */

/* Spread entre Objetos */
let persona = {
  nombre: 'Elisa',
  apellido: 'Giraldo',
  licencia: true
};

let automovil = {
  ...persona,       // Spread de un objeto
  marca: 'Citroen',
  color: 'rojo',
  placa: 'EMG-077',
  anio: 2016
};

console .group( 'Spread entre Objetos' )
  console .log( 'Object: Persona ... ', persona );
  console .log( 'Object: Automovil ... ', automovil );
console .groupEnd();
