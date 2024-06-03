/*  METODOS ejercicio: TRIÁNGULOS
-realize un programa que devuelva el area de un triangulo ingresando base-altura.
-implemente un metodo que llamado calcularAreaTriangulo reciba dos numeros por parametro (un llamado base y otro altura).
*/
/*
import * as rls from "readline-sync";

let base:number , altura:number, area:number;

function calcularAreaTriangulo(base:number, altura:number){
    area=((base*altura)/2);
    return area;
}

base = rls.questionInt("ingrese la base del triangulo: ");
altura = rls.questionInt("ingrese la altura del triangulo: ");
console.log ("el area del triangulo es "+ calcularAreaTriangulo(base, altura));
*/
var texto = "hola!,este string cuenta las letras que ingreses";
function cuantasVocalesTiene(palabras) {
    var cantidadDeA = 0;
    var cantidadDeE = 0;
    var cantidadDeO = 0;
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a") {
            cantidadDeA++;
        }
        else if (palabras[i] === "e") {
            cantidadDeE++;
        }
        else if (palabras[i] === "o")
            cantidadDeO++;
    }
    return [cantidadDeA, cantidadDeE, cantidadDeO];
}
console.log(cuantasVocalesTiene(texto));
