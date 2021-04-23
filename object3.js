var animal = {
    nome: "",
    tipo: "",
    alimentar: function (alimento) {
        return "O " + animal.nome + " comeu o " + alimento;
    },

    sono: function (status) {
        return "O " + animal.nome + " está " + status;
    }
}

animal.nome = "Rex";
animal.tipo = "Cachorro";

console.log("O nome do seu bichinho é: " + animal.nome);
console.log("Ele é um: " + animal.tipo);
console.log(animal.alimentar("ração"));
console.log(animal.sono("dormindo"));






