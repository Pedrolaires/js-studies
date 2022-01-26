const pessoas = [
    {nome: 'Luiz', idade: 37},
    {nome: 'Maria', idade: 21},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 21},
];

const maisVelha = pessoas.reduce((acumulador, obj) =>{

    if(acumulador.idade > obj.idade) return acumulador;
    return obj;
},0)

console.log(maisVelha)