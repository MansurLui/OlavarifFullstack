"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// TIPOS DE NUMERO DE ARREGLO
/*  -almacene en un arreglo de dimension N numeros(la cantidad ingresada por los usuarios)
    -muestre cuantos numeros son positivos,cuantos negativos y cuantos ceros hay.  */
var valorArreglo = rls.questionInt("ingrese cuantos valores quiere que tenga el arreglo: ");
var arreglo = new Array(valorArreglo);
function ingresarArreglo() {
    for (var i = 0; i < valorArreglo; i++) {
        arreglo[i] = rls.questionInt("ingrese el valor de la posicion".concat(i + 1, " del arreglo :"));
    }
    console.log("el arreglo ingresado es ".concat(arreglo));
}
function tiposDeNumeros() {
    var positivos = 0, negativos = 0, ceros = 0;
    for (var i = 0; i < valorArreglo; i++) {
        if (arreglo[i] > 0) {
            positivos++;
        }
        else if (arreglo[i] < 0) {
            negativos++;
        }
        else {
            ceros++;
        }
    }
    console.log("la cantidad de numeros positivos son ".concat(positivos, ", la cantidad de negativos es ").concat(negativos, " y los ceros son ").concat(ceros, "."));
}
ingresarArreglo();
tiposDeNumeros();
