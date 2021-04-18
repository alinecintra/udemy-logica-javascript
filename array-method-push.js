let carros = [
    "Honda Civic",
    "Fiat 500",
    "New Beetle",
    "HB20",
    "Ferrari",
    "BMW"
]

for(var i = 0; i < carros.length; i++) {
    console.log("Antes do push: " + carros[i]);
}

console.log("------------------------------");

//PUSH: insere um novo item no final de um array.
carros.push("Alfa Romeo");

for(var i = 0; i < carros.length; i++) {
    console.log("Após o push: " + carros[i]);
}