/* Expresiones regulares en ES6 */

/* De esta manera podemos verificar que nuestros navegadores soportan ES6 */
var skicky;

try {
  RegExp( '', 'y' );
  sticky = true;    // Si soporta ES6
} catch (e) {
    sticky = false;
}

alert( sticky );
