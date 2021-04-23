var sabreLuz = {
    cor: "Azul",
    som: "Música Star Wars",
    ligar: function(mensagem) {
        return mensagem;
    }
};

sabreLuz.cor = "Azul";
sabreLuz.som = "Música";

console.log("A cor é:" + sabreLuz.cor);
console.log("O som é: " + sabreLuz.som);
console.log(sabreLuz.ligar("O teu sabre de luz foi ativado!"));

console.log("----------------------------");

sabreLuz.cor = "Vermelho";
sabreLuz.som = "Som de sabre";

console.log("A cor é: " + sabreLuz.cor);
console.log("O som é: " + sabreLuz.som);
console.log(sabreLuz.ligar("O teu sabre de luz foi desativado!"));

