/* Valores por defecto en argumentos en ES6 */
function cambiarColorFondo( elemento, color = 'yellow' ) {
  var cuadro = document .getElementById( elemento );
  cuadro .style .backgroundColor = color;
}

window .onload = function() {
  cambiarColorFondo( 'cuadro-1' );              // Color de fondo amarillo
  cambiarColorFondo( 'cuadro-2', 'blue' );      // Color de fondo azul
  cambiarColorFondo( 'cuadro-3', undefined );   // Color de fondo amarillo
}
