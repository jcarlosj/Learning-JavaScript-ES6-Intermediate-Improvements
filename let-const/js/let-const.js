/* Valores por defecto en argumentos en ES6 */
function constTest() {
  const PI = 3.1415;
  PI = 1.1728;          // TypeError: invalid assignment to const `PI'
  console .log( PI );
}

constTest();
