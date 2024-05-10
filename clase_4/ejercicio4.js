for (var contador = 1; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        console.log(contador + " (Múltiplo de 2)");
    }
    else if (contador % 3 == 0) {
        console.log(contador + " (Múltiplo de 3)");
    }
    else
        (contador % 2 == 0 && contador % 3 == 0);
    console.log(contador + " (Múltiplo de 2 y 3)");
}
