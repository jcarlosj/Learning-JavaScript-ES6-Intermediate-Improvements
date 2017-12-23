/* Internacionalización y Localizción en ES6 */

/* Instancias de internacionalización para Formato de Monedas por zona */
var l10nEN = new Intl .DateTimeFormat( 'en-US' ),
    l10nMX = new Intl .DateTimeFormat( 'es-MX' ),
    l10nDE = new Intl .DateTimeFormat( 'de-DE' );

console .group( 'Intl ' );
  console .group( 'DateTimeFormat Method: Formateo de 2017-11-24 por zona: ' );
    console .log( 'Formato fecha Americana: ',l10nEN .format( new Date( '2017-11-24' ) ) );
    console .log( 'Formato fecha Mexicana: ',l10nMX .format( new Date( '2017-11-24' ) ) );
    console .log( 'Formato fecha Europea: ',l10nDE .format( new Date( '2017-11-24' ) ) );
  console .groupEnd();

  /* Relizamos una comparación de acuerdo a la internacionalización de cada idioma y reordenamiento */
  console .group( 'Formato fecha de 2017-11-24 en: ' );
    console .log( '11/23/2017 está en formato de fecha Americano: ', l10nEN .format( new Date( '2017-11-24' ) ) === '11/23/2017' );
    console .log( '23/11/2017 está en formato de fecha Mexicano: ', l10nMX .format( new Date( '2017-11-24' ) ) === '23/11/2017' );
    console .log( '23.11.2017 está en formato de fecha Europeo: ', l10nDE .format( new Date( '2017-11-24' ) ) === '23.11.2017' );
  console .groupEnd();
console .groupEnd();
