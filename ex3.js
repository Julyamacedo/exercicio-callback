function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function calcular(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log("Resultado:", resultado);
}

calcular(5, 3, somar);
calcular(5, 3, multiplicar);