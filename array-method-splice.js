carros = [
    "Honda Civic",
    "Corolla",
    "Fusca",
    "Ferrari",
    "Mercedes",
    "Golf"
]

for(var i = 0; i < carros.length; i++) {
    console.log("Antes do splice: " + carros[i]);
}

console.log("----------------------------")

// SPLICE: Remove ou adiciona um item em um índice específico ou em um intervalo.


//REMOVENDO UM INTERVALO
// carros.splice(0,4);

// for(var i = 0; i < carros.length; i++) {
//     console.log("Depois do splice: " + carros[i]);
// }


//ADICIONANDO UM ITEM EM UM INTERVALO


/*
-- O argumento position determina a posição inicial da matriz em que os novos elementos serão inseridos.
-- O segundo argumento é o que dá o comando ao método splice() para excluir ou não excluir nenhum elemento.
-- O terceiro argumento, o quarto e assim por diante, são os valores dos novos elementos a serem inseridos no array.
*/

carros.splice(0,3, "Corsa", "Gol");

for(var i = 0; i < carros.length; i++) {
    console.log("Depois do splice: " + carros[i]);
}




