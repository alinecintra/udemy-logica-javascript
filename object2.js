var herois = {
    nome: "",
    poder: "",
    acao: function (poder) {
        return poder;
    }
}

herois.nome = "Homem de ferro";
herois.poder = "Armadura";

console.log("Nome:" + herois.nome);
console.log("Poder: " + herois.poder);
console.log(herois.acao("Voar"));

console.log("-----------------------------")

herois.nome = "Lanterna Verde";
herois.poder = "Anel que controla mundo físico";

console.log("Nome:" + herois.nome);
console.log("Poder: " + herois.poder);
console.log(herois.acao("Levitar"));


