/*
NodeJS es un entorno Single Thread, es decir que maneja un solo hilo
Despacha todas las peticiones con el proceso no bloqueante
Es un Event Loop. Le damos peticiones y el loop las va metiendo en cola
Cuando se termina de ejecutar la respuesta, esta vuelve al hilo del loop y da la respuesta a la maquina
*/

console.log("Inicio");

setTimeout(() => {
    console.log("Uno");
}, 3000); /*Los numeros son un temporizador */

setTimeout(() => {
    console.log("Dos");
}, 1500);

setTimeout(() => {
    console.log("Tres");
}, 1000);

setTimeout(() => {
    console.log("Cuatro");
}, 300);

console.log("Fin");