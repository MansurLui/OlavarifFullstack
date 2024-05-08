"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var primerNumero = rls.questionInt("ingrese primer numero:");
var segundoNumero = rls.questionInt("ingrese segundo numero:");
var operacion = rls.question("que operacion desea realizar? (suma o resta)");
var suma = primerNumero + segundoNumero;
var resta = primerNumero - segundoNumero;
console.log(primerNumero, segundoNumero, operacion);
if (operacion == suma) {
    console.log("el resultado es: " + suma);
}
else if (operacion == resta) {
    console.log("el resultado es: " + resta);
}
