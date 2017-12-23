/* Internacionalización y Localizción en ES6 */

/* Instancias de internacionalización para Formato de Monedas por zona */
var l10nUSD = new Intl .NumberFormat( 'en-US', { style: 'currency', currency: 'USD' } ),
    l10nGBP = new Intl .NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP' } ),
    l10nEUR = new Intl .NumberFormat( 'de-DE', { style: 'currency', currency: 'EUR' } );

console .group( 'Intl ' );
  console .group( 'NumberFormat Method: Formateo de 100200300.40 por zona: ' );
    console .log( 'Dólar Americano (USD): ',l10nUSD .format( 100200300.40 ) );
    console .log( 'Libras esterlinas (GBP): ',l10nGBP .format( 100200300.40 ) );
    console .log( 'Euros (EUR): ',l10nEUR .format( 100200300.40 ) );
  console .groupEnd();
  /* Relizamos una comparación de acuerdo a la internacionalización de cada idioma y reordenamiento */
  console .group( 'Formato moneda de 100200300.40 en: ' );
    console .log( '$100,200,300.40 está en formato Dólar Americano (USD): ', l10nUSD .format( 100200300.40 ) === '$100,200,300.40' );
    console .log( '£100,200,300.40 está en formato Libras esterlinas (GBP): ', l10nGBP .format( 100200300.40 ) === '£100,200,300.40' );
    console .log( '100.200.300,40 € está en formato Euros (EUR): ', l10nEUR .format( 100200300.40 ) === '100.200.300,40 €' );
  console .groupEnd();
console .groupEnd();
