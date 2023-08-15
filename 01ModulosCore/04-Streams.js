/*
STREAMS
    'Chorros' de informacion que se transmiten en 'Pedazos' (Chunks)
    3 tipos: Lectura / Escritura / Duplex (Permite lectura y escritura)
    Instancias de EventEmitter
    Acceso asincrono I
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detras de muchos mecanismos de Node.JS
        stdin/stdout
        request de HTTP
        Sockets
        Manipulacion de ficheros/imagenes
*/

'use strict'

var fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt'),
    writeStream = fs.createWriteStream('assets/nombres_copia.txt')

    /*
    readStream.pipe(writeStream)

    readStream.on('data', function (chunk){
        console.log(
            'He Leido:',
            chunk.length,
            'caracteres'
        )
    })

    readStream.on('end', function(){
        console.log('Termine de leer el archivo')
    })

    ES LO MISMO QUE ABAJO

    REPL Read Eval Print Loop
        Para entrar debemos usar el comando node en la consola
        activa la consola para probar codigo
    */

    readStream.pipe(writeStream)

    readStream
        .on('data', function (chunk){
            console.log(
                'He Leido:',
                chunk.length,
                'caracteres'
            )
        })
        .on('end', function(){
            console.log('Termine de leer el archivo')
        })