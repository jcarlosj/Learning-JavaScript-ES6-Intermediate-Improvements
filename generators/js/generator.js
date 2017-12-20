/* Generadores en ES6 */
function* rango( inicio, final, incremento ) {
  while( inicio < final ) {
    yield inicio;           /* Retornamos el valor y mantenemos el estado del mismo */
    inicio += incremento;
  }
}

/* Recorremos los valores generados */
for( let valor of rango( 0, 10, 2 ) ) {
  console .log( valor );      // 0, 2 ,4, 6, 8
}
