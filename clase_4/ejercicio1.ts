import * as rls from "readline-sync";

let primerNumero:number = rls.questionInt("ingrese primer numero:");
let segundoNumero:number = rls.questionInt("ingrese segundo numero:");
let operacion:string = rls.question("que operacion desea realizar? (suma o resta)");
let suma = primerNumero + segundoNumero;
let resta = primerNumero - segundoNumero;

console.log(primerNumero, segundoNumero, operacion);

if (operacion==suma){
    console.log("el resultado es: "+suma);
} else if (operacion==resta) {
    console.log("el resultado es: "+resta);
} else {
    console.log("operacion no encontrada.")
}
