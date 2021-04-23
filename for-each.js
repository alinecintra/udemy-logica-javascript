var estacoes = [
    "Primavera",
    "Verão",
    "Outono",
    "Inverno"
];

function exibeArray(element, index) {
    if(element === "Verão") {
        console.log("Índice: " + index);
    console.log("Elemento: " + element);
    }
    console.log("Essa estação não é o verão!");
}

estacoes.forEach(exibeArray);
