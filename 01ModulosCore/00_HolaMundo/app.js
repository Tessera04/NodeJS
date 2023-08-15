/*
    Cuando consultamos en la consola por window y document en chrome
    y process en la consola de node nos da informacion sobre nuestro archivo y demas 
    Son el objeto global que guarda toda la informacion
    Las APIs no van a funcionar igual en la web y en la pc
    
*/
let nombre = "Neys";

console.log(`Hola mundo, mi nombre es ${nombre}, este es mi primer mensaje desde NodeJS`);

let edad = 25;

if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad")
}

function suma(a, b){
    return a + b;
}

console.log(suma(12, 8));