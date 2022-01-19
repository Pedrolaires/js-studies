const alunos = ['Luiz', 'Maria', 'João', 'Gustavo', 'Solange']


alunos.push('Otávio')
alunos.unshift('Julia')

const removeUltimo = alunos.pop()

const removePrimeiro = alunos.shift()

console.log(removePrimeiro, alunos.slice(0,2), removeUltimo)