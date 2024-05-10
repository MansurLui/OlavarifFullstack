/*  ESTRUCTURAS DE CONTROL
-cree un algoritmo que visualice los numeros que son multiplo de 2 o 3 que hay entre 1 y 100
-tener en cuenta que hay numeros que son multiplos de 2 y 3 al mismo tiempo
-en dichos casos, solamente indique el numero una vez
*/

for (let contador:number=1 ; contador<=100; contador++){
    if(contador % 2 == 0){
        console.log(contador+ " (Múltiplo de 2)");
    } else if (contador % 3 == 0) {
        console.log(contador + " (Múltiplo de 3)");
    } else (contador % 2 == 0 && contador % 3 == 0)
        console.log(contador + " (Múltiplo de 2 y 3)");
}