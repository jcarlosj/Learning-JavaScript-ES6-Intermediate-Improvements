/* Valores por defecto en argumentos en ES6 */

// Crea 2 objetos de datos
let casa = {
  ciudad: 'Bogotá',
  direccion: 'Carrera 30 con 63',
  metros: '300',
  habitaciones: '5',
  banios: '3',
  otros: 'Garaje, 2 patios de ropas y estudio'
}

let apartamento = {
  ciudad: 'Medellín',
  direccion: 'Av Colombia con Cra 70',
  metros: '110',
  habitaciones: '3',
  banios: '2'
}

// Función para extraer los datos del Objeto usando el destructuring asignandolo a una lista de variables
function predio( { ciudad, direccion, metros, habitaciones, banios, otros = 'Sin información' } ) {
  console .log(
    `El predio se encuentra ubicado en la ciudad de ${ciudad} en la dirección
    ${direccion} con las siguientes características: ${metros} metros cuadrados
    ${banios} baños ${habitaciones} habitaciones ${otros}`
  );
}

// Extrae datos a través de la función
predio( casa );
predio( apartamento );
