//Buenas Practicas
/*
Organizacion de Codigo JS
    1-librerias/modulos
    2-constantes
    3-objetos/variables
    4-funciones
    5-eventos
    6-ejecuciones
    
Usar camelCase
    ej: esAlgoAsiElCamelCase

Usar comillas simples

*/
'use strict' //Modo estricto de JavaScript

//HOLA MUNDO

console.log('Hola Mundo desde Node.JS');

console.log(2+5);

//console.log(Window); muestra las funciones y metodos de Window en Chrome

console.log(global); //Similar a Window pero funciona en la Powershell

setInterval(function(){
    console.log('Hola NODEJS');
}, 1000);


//1er paso: entrar a la carpeta donde esta el archivo a elegir del mismo modo que entramos con git pero con la powershell
//2do paso: para ejecutar el archivo en la powershell usamos node ./archivo.js
//3er paso: Si hicimos un bucle infinito y la poweshell no para, podemos usar crtl + c y se detiene el archivo
