// op ternário

const pontuacao = 5000;

const nuvelUsuario = pontuacao >= 1000 ?' VIP' : 'Normal';
console.log(nuvelUsuario)

const corUsuario = 'Cinza';
const corPadrao = corUsuario || 'Roxo';

console.log(corPadrao)