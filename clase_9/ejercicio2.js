"use strict";
/*  -   INVERTIR ARREGLO
        -Almacene en un arreglo de tamaño N los números ingresados por el usuario.
        -La dimensión N también es ingresada por el usuario.
        -Muestre los números del arreglo pero del último al primero. */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("ingrese la dimension del arreglo que desea crear: ");
var arregloIngresado = new Array(dimensionArreglo);
function ingresarArreglo() {
    for (var i = 0; i < dimensionArreglo; i++) {
        arregloIngresado[i] = rls.questionInt("ingrese el valor de la posicion ".concat(i + 1, ": "));
    }
    console.log("el arreglo ingresado es ".concat(arregloIngresado));
}
/*existen 2 formas de invertir el arreglo, la corta con for o la larga con while, la de el while lo modifica al vector(invierte y muestra)
, pero el for solo lo muestra invertido sin modificarlo */
function invertirArreglo(arregloIngresado, dimensionArreglo) {
    var indiceIzq = 0;
    var indiceDer = dimensionArreglo - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = arregloIngresado[indiceIzq];
        arregloIngresado[indiceIzq] = arregloIngresado[indiceDer];
        arregloIngresado[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
function mostrarArreglo(arregloIngresado, dimensionArreglo) {
    for (var i = 0; i < dimensionArreglo; i++) {
        console.log("".concat(arregloIngresado[i], " "));
    }
}
function mostrarArregloInvertido(arregloIngresado, dimensionArreglo) {
    var i;
    for (var i_1 = dimensionArreglo - 1; i_1 >= 0; i_1--) {
        console.log(arregloIngresado[i_1], "");
    }
}
ingresarArreglo();
console.log("muestro el vector invertido sin modificar");
mostrarArregloInvertido(arregloIngresado, dimensionArreglo);
console.log("muestro el vector invertido modificado");
invertirArreglo(arregloIngresado, dimensionArreglo);
mostrarArreglo(arregloIngresado, dimensionArreglo);
