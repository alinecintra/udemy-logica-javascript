//variável que está no escopo global
var shopping = "Shopping";

function farmacia() {
    //escopo de farmácia
    var farmaciaVariavel = "Farmácia";

    function perfumaria() {
        //escopo de perfumaria
        var perfumariaVariavel = "Perfumaria";
        return perfumariaVariavel;  
    }
    // return perfumaria();  
    return farmaciaVariavel;
}

console.log(shopping);
console.log(farmacia());
// console.log(perfumariaVariavel);