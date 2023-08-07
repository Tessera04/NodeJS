'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); //El text plain lo podemos cambiar por text/html
    res.end('Hola Mundo'); //Si hacemos lo que puse arriba, aca podemos poner estructuras html
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});



/*

ACA ESTA LA FORMA DE HACERLO CON HTML COMO PUSE ARRIBA

'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); //El text plain lo podemos cambiar por text/html
    res.end('<h1>Hola Mundo</h1>'); //Si hacemos lo que puse arriba, aca podemos poner estructuras html
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
*/