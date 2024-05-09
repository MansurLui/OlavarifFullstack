import * as rls from "readline-sync";

/*
//promediar notas
let suma: number, nota: number, promedio: number, contador: number;

contador = 0;
suma= 0;
promedio= suma/10;

while (contador <=10){
    nota =rls.questionInt("ingrese nota:");
    suma =suma + nota;
    contador++;
}

console.log("el promedio de las notas es de :"+promedio);
*/


//llegada colectivo

/*let llegoColectivo:string =rls.question("llego el colectivo? (S/N)");

while (llegoColectivo=="N" || llegoColectivo=="n")
    {
    console.log("aun no llego el colectivo");
    llegoColectivo =rls.question("llego el colectivo? (S/N)");
}
console.log("ya llego el colectivo");
*/

//el mismo ejemplos de las notas pero con for

let suma : number, nota : number, promedio : number;

suma=0;

for (let contador=1; contador <11; contador++) {
    nota =rls.questionFloat("ingrese la nota:");
    suma +=nota;
}
promedio= suma/10;

console.log("el promedio de las notas es de :"+promedio);
