/*
En NodeJS podemos encontrar modulos creados por la comunidad
modulos creados por nosotrosy los predefinidos, estos los podemos encontrar buscando en la documentacion de node
y los de la comunidad los encontramos en nmpjs.com (Es un gestor de paquetes)
*/

const sumar = (a, b) => a + b,
      restar = (a ,b) => a - b,
      multiplicar = (a, b) => a * b,
      dividir = (a, b) => a / b,
      modulo = (a, b) => a % b,

      calculadora = {
        sumar, /*Esto es una clave:valor, pero al tener el mismo nombre no es necesario hacerlo con ese formato. sirve solo en js*/
        restar,
        multiplicar,
        dividir,
        modulo
      }

    module.exports = calculadora;