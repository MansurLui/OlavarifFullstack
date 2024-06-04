"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  ORDENAMIENTO BURBUJA
//  FUNCION NUMERO AL AZAR
/*
    se utilizan 4 funciones (2 bucles, el i que indica la cantidad de veces que va a iterar
    y el j que dice donde empieza y donde termina el burbujeo)
*/
//funcion que permite cargar arreglo, en cantidad le damos la dimension y lo va a ir cargando con numeros al azar
function cargar(arreglo, cantidad, numeroAzar) {
    var i;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numeroAzar);
    }
}
//funcion cargar numero ramdom entre 0 Y numAzar
function Azar(numAzar) {
    return Math.floor(Math.random() * numAzar);
}
//este metodo nos permite ver el arreglo creado al azar separados por un espacio uno al lado del otro.
function escribirEnUnaLinea(arreglo, cantidad) {
    var i;
    var vector = ""; //crea una variable string vacia (si la completo con algo entre las "", va a llenar los espacios con eso)
    for (var i_1 = 0; i_1 < cantidad; i_1++) {
        vector += "".concat(arreglo[i_1], " ");
    }
    console.log(vector);
}
//este metodo intercambia los valoras de i y j del arreglo.
function intercambiar(arreglo, i, j) {
    var aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
//aca hace una comparacion,va viendo si el valor de i = j asi empieza a acomodar los valores de las posiciones segun el resultado.
//  devuelve 0 si son iguales, 1 si i>j y -1 si i<j
function comparar(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] > arreglo[j]) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}
//funcion burbuja (se utlizan todos los anteriores para componerla)
function burbuja(arreglo, cantidad) {
    var i, j;
    for (i = 2; i < cantidad; i++) { //este primer for indice es la cantidad de veces que recorre el arreglo.
        for (var j_1 = 0; j_1 < (cantidad - 1); j_1++) { //este segundo for compara si uno es mayor que otro asi los intercambia y va acichando el rango a medida que se acomoda el arreglo
            if (comparar(arreglo, j_1, j_1 + 1) === 1) {
                intercambiar(arreglo, j_1, j_1 + 1); // aca si no estan ordenados los intercambia.
            }
        }
    }
}
//RESUMEN DE TODO, este es el algoritmo que se utiliza
//algoritmo orden
var limite = 20;
var array = new Array(limite);
cargar(array, limite, 100);
escribirEnUnaLinea(array, limite);
burbuja(array, limite);
escribirEnUnaLinea(array, limite);
