"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ORDENAMIENTO
//  Implemente un algoritmo de ordenamiento con modo Bubble Sort, para que ordene un arreglo de longitud N en orden descendente.
function cargar(array, dimension, numerosCargados) {
    for (var i = 0; i < dimension; i++) {
        array[i] = Azar(numerosCargados);
    }
}
function Azar(numAzar) {
    return Math.floor(Math.random() * numAzar);
}
function escribirArray(array, dimension) {
    var i;
    var vector = "";
    for (var i_1 = 0; i_1 < dimension; i_1++) {
        vector += "".concat(array[i_1], " ");
    }
    console.log(vector);
}
function intercambiar(array, i, j) {
    var aux;
    aux = array[i];
    array[i] = array[j];
    array[j] = aux;
}
function compararNumeros(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] > arreglo[j]) {
        comparacion = 1;
    }
    else {
        comparacion = -1;
    }
    return comparacion;
}
function burbuja(array, dimension) {
    var i, j;
    for (i = 0; i < dimension; i++) {
        for (var j_1 = 0; j_1 < (dimension - 1); j_1++) {
            if (compararNumeros(array, j_1, j_1 + 1) === 1) {
                intercambiar(array, j_1, j_1 + 1);
            }
        }
    }
}
var numerosCargados = 10;
var elementos = new Array(numerosCargados);
cargar(elementos, numerosCargados, 100);
burbuja(elementos, numerosCargados);
escribirArray(elementos, numerosCargados);
