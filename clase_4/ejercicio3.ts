import * as rls from "readline-sync";

let clave: string, intentos: number, claveCorrecta: string;

intentos = 3;
(clave = "eureka"), "Eureka", "EUREKA";

for (let contador: number = 0; contador < intentos; contador++) {
  claveCorrecta = rls.question("ingrese la clave: ");
    if (claveCorrecta == clave) {
    console.log("la clave ingresada es la correcta!");
  } else {
    console.log(  "clave incorrecta le quedan " + (intentos - contador-1) + " intentos."
    );
  }
}
