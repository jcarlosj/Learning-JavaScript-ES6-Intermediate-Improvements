/* Valores por defecto en argumentos en ES6 */

/* Conversión Tradicional */
var numero_binario     = '111110111',   // Número binario puro
    numero_octal       = '767',         // Número octal puro
    numero_hexadecimal = '0x1F7';       // Número hexadecimal puro

console .group( 'Conversión Tradicional' );
  console .log (
    'Binario ' + numero_binario + ' a Decimal',
    parseInt( numero_binario, 2 )
  );              // 503
  console .log (
    'Octal ' + numero_octal + ' a Decimal',
    parseInt( numero_octal, 8 )
  );              // 503
  console .log (
    'Hexadecimal ' + numero_hexadecimal + ' a Decimal',
    parseInt( numero_hexadecimal, 16 )
  );              // 503
console .groupEnd();

/* Conversión Usando Literales */
var binario     = 0b111110111,  // Agregando 0b literal binario
    octal       = 0o767,        // Agregando 0o literal octal
    hexadecimal = 0x1f7;        // Agregando 0x literal hexadecimal

console .group( 'Literales Octales y Binarias' );
  console .log(
    'Binario 0b111110111 a Decimal',
    binario
  );               // 503
  console .log(
    'Octal 0o767 a Decimal',
    octal
  );               // 503
  console .log(
    'Hexadecimal 0x1f7 a Decimal',
    hexadecimal
  );               // 503
console .groupEnd();
