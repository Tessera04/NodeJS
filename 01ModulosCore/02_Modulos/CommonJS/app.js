const calculadora = require("./calculadora"); /*Llamamos al archivo calculadora para acceder a sus funciones*/
      c = console.log;

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(2, 4));
