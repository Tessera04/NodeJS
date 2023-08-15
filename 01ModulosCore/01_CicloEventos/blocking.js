/*
Sirve para ver como NodeJS ejecuta las operaciones de entrada y salid
por ejemplo lectura y escritura de archivos

El modo bloqueante o sincrono, espera que la tarea 1 se complete para pasar a la tarea 2
El modo no bloqueante o asincrono, inicia una operacion pero sigue ejecutando otras hasta que se finalizen

El modo no bloqueante es mas eficiente
*/

const fs = require("fs");

console.log("Inicio del Programa");

const data = fs.readFileSync("archivo.txt", "utf8");
/*En el metodo bloqueante se usa readFileSync*/
console.log(data);

console.log("Fin del Programa");