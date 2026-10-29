function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(2, numero => {
    console.log("Triplo:", numero * 3);
});

processarNumero(5, numero => {
    console.log("Triplo:", numero * 3);
});

processarNumero(10, numero => {
    console.log("Triplo:", numero * 3);
});