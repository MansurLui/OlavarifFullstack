"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var palabra = rls.question("ingrese la palabra que desea invertir: ");
var cantidadDeLetras = palabra.length;
var v = palabra.split("");
function mostrarVectorInvertido(v, cantidadDeLetras) {
    console.log(v[palabra] + " ");
}
function invertirVector(v, cantidadDeLetras) {
    var indiceIzq = 0;
    var indiceDer = cantidadDeLetras - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
invertirVector(v, cantidadDeLetras);
console.log("mostrando vector");
mostrarVectorInvertido(v, cantidadDeLetras);
