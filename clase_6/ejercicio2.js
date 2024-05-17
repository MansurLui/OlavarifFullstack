"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*  ENCONTRAR EL ELEMENTO MAS GRANDE DEL ARREGLO

Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
    -crear un programa que encuentre el numero mas grande del arreglo e imprimirlo por consola.
    -almacenar el numero mas grande en una variable global y pasarlo a una funcion para determinar si es par o impar.
*/
var arreglo = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var mayorNumero = arreglo[0];
var indice;
console.log("los numeros del arreglo son ".concat(arreglo));
for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] >= mayorNumero) {
        mayorNumero = arreglo[indice];
    }
}
function parOImpar(mayorNumero) {
    if (mayorNumero % 2 === 0) {
        console.log("".concat(mayorNumero, " es par."));
    }
    else {
        console.log("".concat(mayorNumero, " es impar."));
    }
}
console.log("el mayor numero del arreglo es ".concat(mayorNumero));
parOImpar(mayorNumero);
