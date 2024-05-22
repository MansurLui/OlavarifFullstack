/* import * as rls from "readline-sync";

let palabra:string = rls.question("ingrese la palabra que desea invertir: ");
let cantidadDeLetras:number = palabra.length;
let v:string[] = palabra.split("");

function mostrarVectorInvertido(v:string , cantidadDeLetras:number){
    console.log(v[palabra] + " ");
}

function invertirVector(v:string [], cantidadDeLetras:number){
    let indiceIzq:number =0;
    let indiceDer:number =cantidadDeLetras-1;
    let aux:string;

    while(indiceIzq<indiceDer){
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}

invertirVector(v,cantidadDeLetras);
console.log("mostrando vector");
mostrarVectorInvertido(v,cantidadDeLetras); */