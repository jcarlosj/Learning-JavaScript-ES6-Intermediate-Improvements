/* Nuevos métodos en ES6 */

/* Assign */
var destino = {
      producto: 'Leche'
    },
    frutas = {
      producto1: 'Manzana',
      producto2: 'Mango',
      producto3: 'Mora'
    },
    verduras = {
      producto3: 'Cebolla',   /* Este rescribirá el 'producto3' del Objeto frutas */
      producto4: 'Calabaza',
      producto5: 'Cilantro'
    };

/* Asigna todos los valores a un único objeto */
Object .assign( destino, frutas, verduras );  /* Como el objeto verduras es el último reescribirá los elementos con el mismo nombre del objeto anterior 'producto3' en este caso */
console .log( destino );
