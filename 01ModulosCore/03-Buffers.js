/*
Buffers
    Son una tira de bytes(datos binarios)
    Similar a un Array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Streams
        Implementar protocolos complejos
        Manipulacion de ficheros/imagenes
        Criptografia

    Los datos que maneja son como los boolean, las variables, etc en js
*/

'use strict'

var buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii');

console.log(buf);

//El metodo Buffer esta deprecado;