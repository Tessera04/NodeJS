import { calculadora } from "./calculadora.js";/*Llamamos al archivo calculadora para acceder a sus funciones, en ES6 usamos import, en el modo viejo usamos un const y un require*/
const c = console.log;

/*De esta manera no va a funcionar solo, debemos modificar el package.json agregando el "type: module" 
En caso de que no sepamos hacerlo, debemos usar el acortador mjs en vez de js para decir que es un ModuloJS (MJS)
Esto debemos hacerlo en todos los archivos afectados
*/

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(2, 4));