/* Valores por defecto en argumentos en ES6 */
function templateStrings() {

  var nombre = 'Juan',
      edad = 40,
      saludo0 = `Esto es un "Template String"`,                           // Template String
      saludo1 = `Mi nombre es ${nombre} y tengo ${ edad } años de edad`,  // Template String
      nombre = 'María',
      edad = 19,
      /* Template String */
      saludo2 = `Hola ${ nombre } sabemos
      que tienes ${ edad }
        años de edad`;

      /* Resultados */  
      console .group( 'Template Strings' );
        console .log( saludo0 );
        console .log( saludo1 );
        console .log( saludo2 );
      console .groupEnd();
}

templateStrings();
