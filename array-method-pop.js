carros = [
    "Honda Civic",
    "Corolla",
    "Fusca",
    "Ferrari",
    "Mercedes",
    "Golf"
]

for(var i = 0; i < carros.length; i++) {
    console.log("Antes do pop: " + carros[i]);
}

console.log("----------------------------")

// POP: Remove o último item do array

carros.pop();
carros.pop();

for(var i = 0; i < carros.length; i++) {
    console.log("Depois do pop: " + carros[i]);
}