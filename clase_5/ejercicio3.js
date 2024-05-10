"use strict";
/* METODOS  ejercicio: DIVISORES
-implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la cantidad de divisores.
-por ej, para el numero 16, sus divisores son 1 ,2 ,4 ,8 ,16 , por lo que las respuesta deberia ser 5.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var divisores, dividendo;
function cantidadDeDivisores(divisores) {
    var dividendo = 0;
    for (var i = 0; i <= divisores; i++) {
        if (divisores % i === 0) {
            dividendo++;
        }
    }
    return dividendo;
}
dividendo = rls.questionInt("ingrese el primer numero: ");
divisores = rls.questionInt("ingrese el segundo numero: ");
console.log(cantidadDeDivisores(divisores));
