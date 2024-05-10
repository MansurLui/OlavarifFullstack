/*  ESTRUCTURAS
-realice un programa que devuelva la potencia de un numero.
-la base y el exponente deben ingresarse por teclado.
-solo se admiten exponentes mayores o iguales a 0.
-el resultado de un numero elevado a 0 es 1.
separe la logica de calcular la potencia utilizando metodos.
*/

import * as rls from "readline-sync";

let base: number, exponente: number;

console.log("Bienvenido a la calculadora de potencias!");
base= rls.questionInt("por favor ingrese el numero base: ");
exponente= rls.questionInt("ahora ingrese a que numero quieres potenciarlo: ");

function calcularExponente(base:number, exponente:number) {
    if (exponente <0){
        console.log("Exponente invalido, ingrese uno mayor a 0");
    } else if (exponente==0){
        console.log("1");
    } else {
    console.log("la potencia de "+ base +" elevado a "+ exponente + " es " + potencia(base,exponente));
    }
}

function potencia(base:number, exponente:number) {
    let resultado:number =base**exponente;
    return resultado;
}

calcularExponente(base,exponente);
