import * as readlineSync from 'readline-sync';

let primerNumero:number = readlineSync.questionInt("ingrese el primer numero:");
let segundoNumero:number = readlineSync.questionInt("ingrese el segundo numero:");
let tercerNumero:number = readlineSync.questionInt("ingrese el tercer numero:");

if (primerNumero>segundoNumero && primerNumero>tercerNumero){
    console.log("el mayor numero es "+primerNumero);
} else if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
    console.log("el mayor numero es "+segundoNumero);
} else if(tercerNumero>primerNumero && segundoNumero<tercerNumero){
    console.log("el mayor numero es "+tercerNumero);
}