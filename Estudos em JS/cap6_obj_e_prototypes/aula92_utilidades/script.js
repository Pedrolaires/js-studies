
const produto = {nome: 'Caneca', preco: 1.8};

/* const produtoMod = {
    ...produto,
    material: 'porcelana'
} */

/* const produtoMod = Object.assign({}, produto, { material : 'porcelana'}) */ //Copia um objeto, como o Spread (destino, obj)

/* const produtoMod = {nome: produto.nome, preco: produto.preco, material: 'porcelana'};
Object.freeze(produtoMod)
produtoMod.nome = 'caneca_de_porcelana' */

/* Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) */

produto.nome = 'Cadeira';

console.log('Objeto: ',produto);

/* console.log(produtoMod); */
console.log('\nKeys:',Object.keys(produto));
console.log('Values: ',Object.values(produto));

console.log('\nEntries: ',Object.entries(produto)); // cada [chave e valor] em um array .
console.log('\nIterando sobre o entries:');
for( let [chave, valor] of Object.entries(produto)){ // Destruct
    console.log(chave, valor);
}
/* console.log('\n');
// Mesma coisa
for( let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
} */
