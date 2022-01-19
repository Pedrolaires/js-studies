const frutas = ['Pera', 'Maçã', 'Uva'];

//for in
for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lucas',
    idade: 21
}
console.log('\n#### For in\n') // retorna o índice (string, array, obj)
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}
console.log('\n#### For Of\n') // Retorna o valor (arrays ou Strings)

// for of

const nome = 'Pedro'


for(let valor of nome){
    console.log(valor)
}


console.log('\n#### For Each\n')

const nomes = ['Pedro', 'Otavio', 'Mesquita'];

nomes.forEach(element => {
    console.log(element)
});

console.log('\n')

nomes.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
});