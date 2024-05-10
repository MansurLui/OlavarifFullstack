"use strict";
/*  ESTRUCTURAS
-realice un programa que devuelva la potencia de un numero.
-la base y el exponente deben ingresarse por teclado.
-solo se admiten exponentes mayores o iguales a 0.
-el resultado de un numero elevado a 0 es 1.
separe la logica de calcular la potencia utilizando metodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base, exponente;
console.log("Bienvenido a la calculadora de potencias!");
base = rls.questionInt("por favor ingrese el numero base: ");
exponente = rls.questionInt("ahora ingrese a que numero quieres potenciarlo: ");
function calcularExponente(base, exponente) {
    if (exponente < 0) {
        console.log("Exponente invalido, ingrese uno mayor a 0");
    }
    else if (exponente == 0) {
        console.log("1");
    }
    else {
        console.log("la potencia de " + base + " elevado a " + exponente + " es " + potencia(base, exponente));
    }
}
function potencia(base, exponente) {
    var resultado = Math.pow(base, exponente);
}
calcularExponente(base, exponente);
