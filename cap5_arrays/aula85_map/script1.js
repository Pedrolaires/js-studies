
const pessoas = [
    {nome: 'Luiz', idade: 37},
    {nome: 'Maria', idade: 21},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 21},
];

const nomesPessoas = pessoas.map(obj => obj.nome);
console.log(nomesPessoas);

const idadePessoas = pessoas.map(obj => ({idade: obj.idade})); // envolver o obj entre ()
console.log(idadePessoas);

const pessoasComIds = pessoas.map(function (obj,indice){ // por ref
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj;
});

console.log(pessoasComIds)

console.log(pessoas)