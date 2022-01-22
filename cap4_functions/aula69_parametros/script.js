// arguments
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6,7,8,9); 

// desestruturação
 function funcao2 ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

const obj = {
    nome: 'Pedro',
    sobrenome: 'Lucas',
    idade: 21
};
funcao2(obj)

// rest
const conta = (operador, acumulador, ...numeros)=>{
    for(let numero of numeros){
        if(operador === '+')acumulador += numero;
        if(operador === '-')acumulador -= numero;
        if(operador === '/')acumulador /= numero;
        if(operador === '*')acumulador *= numero;
    }
    console.log(acumulador)
};

conta('+', 0,20,30,40,50)