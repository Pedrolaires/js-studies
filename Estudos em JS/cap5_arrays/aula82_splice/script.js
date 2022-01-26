//               -5        -4        -3       -2       -1
//                0         1         2        3        4
const nomes = [ 'Ana', 'Gabriela', 'João', 'Pedro', 'Amanda' ];

//nomes.splice(índice, delete, adicionarElem1, adicionarElem2);

// const removido = nomes.splice(-1,1);   // .pop()
// const removido = nomes.splice(0,1);   // .shift()
// nomes.splice (nomes.lenght, 0,'Luiz'); //.push()
// nomes.splice(0,0,'Luiz');              //.unshift()


const removido = nomes.splice(3,1,'Carlos');
console.log(nomes);
console.log(removido);