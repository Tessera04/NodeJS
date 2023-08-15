/* 
Block: se detiene paso por paso
non-Block: No se detiene, por eso se ve primero findel programa y despues lee el archivo
es decir lee todo a la vez
*/

const fs = require("fs");

console.log("Inicio del programa");

fs.readFile("archivo.txt", "utf8", (err, data) => {
    /*
    En el asincrono se usa readFile, pero recibe mas parametros
    Como en este caso que se usa una callback. 
    */
    if (err) throw err; /*Es un if else, si hay error mandalo*/
    console.log(data); /*Sino lee el programa*/
});

console.log("Fin del Programa");