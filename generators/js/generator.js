/* Generadores en ES6 */
let fibonacci = {
  *[ Symbol.iterator ] () {                 // Generador (inicia la iteración)
    let pre = 0,
        cur = 1;

    for( ;; ) {
      [ pre, cur ] = [ cur, pre + cur ];    // Destructuring
      yield cur;
    }
  }
}

/* Obtenemos los números la serie Fibonacci menores a 1000 */
for( let numero of fibonacci ) {
  if( numero > 1000 ) break;

  console .log ( numero );    // 1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
}
