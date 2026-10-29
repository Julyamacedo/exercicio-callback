function verificarNota(nota, callback) {
    callback(nota);
}

function mostrarSituacao(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
}

verificarNota(8, mostrarSituacao);
verificarNota(4, mostrarSituacao);