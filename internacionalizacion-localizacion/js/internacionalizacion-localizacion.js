/* Internacionalización y Localizción en ES6 */

/* Instancias de internacionalización para Formato de Números por zona */
var l10nEN = new Intl .NumberFormat( 'en-US' ),
    l10nDE = new Intl .NumberFormat( 'de-DE' );

console .group( 'Intl ' );
  console .group( 'NumberFormat Method: Formateo de 123456.89 por zona: ' );
    console .log( 'Convertir a formato Americano: ',l10nEN .format( 123456.89 ) );
    console .log( 'Convertir a formato Europeo (Alemán): ',l10nDE .format( 123456.89 ) );
  console .groupEnd();
  /* Relizamos una comparación de acuerdo a la internacionalización de cada idioma y reordenamiento */
  console .group( 'Formato númerico de 123456.89 en: ' );
    console .log( '1,234,567,89 está en formato Americano: ',l10nEN .format( 123456.89 ) === '1,234,567,89' );
    console .log( '1.234.567.89 está en formato Europeo (Alemán): ',l10nDE .format( 123456.89 ) === '1.234.567.89' );
  console .groupEnd();
console .groupEnd();
