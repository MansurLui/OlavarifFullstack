"use strict";
/*  METODOS
-realize un programa que devuelva el area de un triangulo ingresando base-altura.
-implemente un metodo que llamado calcularAreaTriangulo reciba dos numeros por parametro (un llamado base y otro altura).
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base, altura, area;
base = rls.questionInt("ingrese la base del triangulo: ");
altura = rls.questionInt("ingrese la altura del triangulo: ");
function calcularAreaTriangulo(base, altura) {
    area = ((base * altura) / 2);
    return area;
}
console.log("el area del triangulo es " + calcularAreaTriangulo(base, altura));
