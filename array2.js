var matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

for(var linha = 0; linha < matriz.length; linha++ ) {
    for(var coluna = 0; coluna < matriz[linha].length; coluna++) {
        console.log(matriz[linha][coluna]);
    }
}