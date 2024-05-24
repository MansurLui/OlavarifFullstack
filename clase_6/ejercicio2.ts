
/*  ESTRUCTURAS DE DATOS-ENCONTRAR EL ELEMENTO MAS GRANDE DEL ARREGLO

Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-crear un programa que encuentre el numero mas grande del arreglo e imprimirlo por consola.
-almacenar el numero mas grande en una variable global y pasarlo a una funcion para determinar si es par o impar.
*/
import * as rls from 'readline-sync';

let arreglo:number [] = [4,7,9,3,1,45,67,23,29,78,11,16];
let mayorNumero =arreglo[0];
let i:number;

console.log(`los numeros del arreglo son ${arreglo}`);
for (i=0; i<arreglo.length ;i++){
    if (arreglo[i]>=mayorNumero){
        mayorNumero = arreglo[i];
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
parOImpar(mayorNumero);
