/* Valores por defecto en argumentos en ES6 */

/* Función como parámetro de otra */
function saludos( cosa = predeterminada() ) {
  return cosa;
}

/* Funciones corrientes */
function predeterminada() {
  return 'Hola!';
}
function ingles() {
  return 'Hello!';
}
function personalizado( nombre ) {
  return 'Hola ' + nombre + ' saludos desde ES6';
}

/* Resultados */
console .group( 'Saludos ' );
  console .log( 'Corriente ', saludos() );                                // Hola
  console .log( 'En inglés ', saludos( ingles() ) );                      // Hello
  console .log( 'Personalizado ', saludos( personalizado( 'Juan' ) ) );   // Hola Juan saludos desde ES6
  console .log( 'Repite ', saludos( 'Juanito' ) );                        // Juanito
console .groupEnd();
