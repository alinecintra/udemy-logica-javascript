// reverse: inverte a ordem dos itens de um array.

var clima = [
    "Verão",
    "Outono",
    "Primavera",
    "Inverno"
]

for(var i = 0; i < clima.length; i++ ) {
    console.log("Antes reverse -> O clima atual é: " + clima[i]);
}

console.log("--------------------------");

clima.reverse();

for(var i = 0; i < clima.length; i++ ) {
    console.log("Depois reverse -> O clima atual é: " + clima[i]);
}


