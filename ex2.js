function mostrarBoasVindas() {
    console.log("Seja bem-vindo!");
}

function mostrarDespedida() {
    console.log("Até logo!");
}

function executarMensagem(callback) {
    callback();
}

executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);