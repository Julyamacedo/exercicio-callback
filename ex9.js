function prepararPedido(callback) {
    console.log("Preparando pedido...");

    setTimeout(function() {
        callback();
    }, 2000);
}

prepararPedido(function() {
    console.log("Pedido pronto!");
});