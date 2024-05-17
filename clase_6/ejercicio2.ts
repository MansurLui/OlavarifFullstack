import * as rls from 'readline-sync';

/*  ENCONTRAR EL ELEMENTO MAS GRANDE DEL ARREGLO

Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
    -crear un programa que encuentre el numero mas grande del arreglo e imprimirlo por consola.
    -almacenar el numero mas grande en una variable global y pasarlo a una funcion para determinar si es par o impar.
*/

let arreglo:number [] = [4,7,9,3,1,45,67,23,29,78,11,16];
let mayorNumero =arreglo[0];
let indice:number;

console.log(`los numeros del arreglo son ${arreglo}`);
for (indice = 0; indice < arreglo.length;indice++){
    if (arreglo[indice]>=mayorNumero){
        mayorNumero = arreglo[indice];
    }
}

function parOImpar(mayorNumero:number){
    if(mayorNumero%2===0){
        console.log(`${mayorNumero} es par.`);
    } else {
        console.log(`${mayorNumero} es impar.`);
    }
}

console.log(`el mayor numero del arreglo es ${mayorNumero}`);
console.log(parOImpar(mayorNumero));
