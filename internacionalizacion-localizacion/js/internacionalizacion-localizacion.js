/* Internacionalización y Localizción en ES6 */

/* En alemán la letra (ä) se ordena junto a la letra (a). Sin embargo
   en sueco la letra (ä) se ordenaría junto a la entra (z) */

var listaLetras = [ 'ä', 'a', 'z' ];

/* Creamos la instancia del Objeto de Internacionalización */
var l10nDE = new Intl .Collator( 'de' ),      // Para el idioma alemán
    l10nSV = new Intl .Collator( 'sv' );      // Para el idioma sueco

console .group( 'Intl ' );
  /* Relizamos una comparación de acuerdo a la internacionalización de cada idioma y reordenamiento */
  console .group( 'Collator Method: Comparación sistemática por zona' );
    console .log( ' - Aleman: ', listaLetras .sort( l10nDE .compare ) );     // Ordena asi: [ 'a', 'ä', 'z' ]
    console .log( ' - Sueco: ', listaLetras .sort( l10nSV .compare ) );      // Ordena asi: [ 'a', 'z', 'ä' ]
  console .groupEnd();

  /* Usamos el método compare de la clase Intl */
  console .group( 'Internacionalización: compare()' );
    console .log( ' - Aleman: ', l10nDE .compare( 'ä', 'z' ) );  // -1 Orden correcto (primero va ä y luego z en Alemán )
    console .log( ' - Sueco: ', l10nSV .compare( 'ä', 'z' ) );   //  1 Orden incorrecto (primero va z y luego ä en Sueco )
  console .groupEnd();
console .groupEnd();
