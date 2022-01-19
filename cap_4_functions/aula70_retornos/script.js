//closure
function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));