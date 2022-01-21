// estudo de caso extra!
// O objetivo seria utilizar o id recebido do array de objetos e utiliza-lo como chave de cada objeto

const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];


/* const novasPessoas = {};

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas)
// o problema do código é que a chave foi convertida em String e, principalmente, a ordem dos objetos foi alterada.
 */
console.log('Map:\n')
const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas)
//console.log(novasPessoas.get(3))

console.log('\nArray com os objetos:\n')

for(const pessoa of novasPessoas){
    console.log(pessoa);
}

console.log('\nDestruct do Array:\n')

for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier,id,nome)
}

console.log('\nDeletando uma das chaves:\n')

novasPessoas.delete(2);
console.log(novasPessoas);