/*  -   INVERTIR ARREGLO
        -Almacene en un arreglo de tamaño N los números ingresados por el usuario.
        -La dimensión N también es ingresada por el usuario.
        -Muestre los números del arreglo pero del último al primero. */

import * as rls from "readline-sync";

let dimensionArreglo:number= rls.questionInt("ingrese la dimension del arreglo que desea crear: ");
let arregloIngresado:number[]=new Array(dimensionArreglo);

function ingresarArreglo(){
    for (let i=0; i<dimensionArreglo;i++){
        arregloIngresado[i]=rls.questionInt(`ingrese el valor de la posicion ${i+1}: `);
    }
    console.log(`el arreglo ingresado es ${arregloIngresado}`);
}

/*existen 2 formas de invertir el arreglo, la corta con for o la larga con while, la de el while lo modifica al vector(invierte y muestra)
, pero el for solo lo muestra invertido sin modificarlo */

function mostrarArregloInvertido(arregloIngresado,dimensionArreglo){
    let i:number;
    for (let i = dimensionArreglo-1; i >= 0 ; i--) {
        console.log(arregloIngresado[i],"");
    }
}

function invertirArreglo(arregloIngresado,dimensionArreglo){
    let indiceIzq:number =0;
    let indiceDer:number =dimensionArreglo-1;
    let aux:number;
    while(indiceIzq<indiceDer){
        aux=arregloIngresado[indiceIzq];
        arregloIngresado[indiceIzq]=arregloIngresado[indiceDer];
        arregloIngresado[indiceDer]=aux;
        indiceIzq++;
        indiceDer--;
    }

}

//para mostrar el arreglo modificado tengo que crear una funcion que lo muestre después de que lo modifique e invierta al mismo.
function mostrarArreglo(arregloIngresado,dimensionArreglo){
    for (let i = 0; i < dimensionArreglo; i++) {
        console.log(`${arregloIngresado[i]} `);
    }
}

ingresarArreglo();
console.log(`muestro el vector invertido sin modificar`);
mostrarArregloInvertido(arregloIngresado,dimensionArreglo);
console.log(`muestro el vector invertido modificado`);
invertirArreglo(arregloIngresado,dimensionArreglo);
mostrarArreglo(arregloIngresado,dimensionArreglo);