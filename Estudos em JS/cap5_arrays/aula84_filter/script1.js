
const pessoas = [
    {nome: 'Luiz', idade: 37},
    {nome: 'Maria', idade: 21},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 21},
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length > 5);

console.log('Pessoas com nome maior que 5 letras:\n',pessoasComNomeGrande)

const pessoasComMaisDe30 = pessoas.filter(obj => obj.idade > 30)

console.log('Pessoas com mais de 30 anos:\n',pessoasComMaisDe30)

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log('Pessoas cujo nome termina com \'a\':\n',nomeTerminaComA)