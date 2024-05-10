/*  METODOS
-cree un metodo esMultiplo con 2 parametros que devuelva el valor logico verdadero o falso segun si el primer numero que se indique
como parametro es multiplo del segundo.
-recuerde que un numero es multiplo de otro si al dividirlo su resto es 0.
-recuerde que la operacion mod permite saber si el resto de una division es 0.
*/

import * as rls from "readline-sync";

let dividendo:number , divisor:number;

function esMultiplo(dividendo:number, divisor:number):boolean {
    return dividendo % divisor ===0;
}

dividendo= rls.questionInt("ingrese el primer numero: ");
divisor= rls.questionInt("ingrese el segundo numero: ");
console.log(esMultiplo(dividendo,divisor));